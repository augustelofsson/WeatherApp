import React, { useState, useEffect } from 'react';
import '../Styles/Weather.css';
import '../Styles/CardsContainer.css';

import SearchComponent from './SearchComponent';
import DailyWeatherCards from './DailyWeatherCards';
import CurrentWeather from './CurrentWeather';


const WeatherContainer = () =>{
    const API_KEY = "4c28622f6f32873334af82ac5f98b863";
    
    const [searchQuery, setSearchQuery] = useState('Stockholm');
    const [dailyData, setDailyData] = useState([]);
    const [currentData, setCurrentData] = useState({
        city : null,
        temp : null,
        date : null,
        weatherid : null,
        desc : null,
        country : null
    });
    const [errorData, setErrorData] = useState({});
    
    const Search = (searchValue) => {

        setSearchQuery(searchValue);
    }
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchQuery}&units=metric&appid=${API_KEY}`)
        .then(response =>  response.json())
        .then(data => {

            if(data.cod === "200"){
                const dailyfiltered = data.list.filter(d => d.dt_txt.includes("15:00:00"))
                setDailyData(dailyfiltered);
                setCurrentData({
                    city : data.city.name,
                    temp : data.list[0].main.temp,
                    date : data.list[0].dt,
                    weatherid : data.list[0].weather[0].id,
                    desc : data.list[0].weather[0].main,
                    country : data.city.country
            }); 
            
             setErrorData({});    
            }else{
                setErrorData(data);
            }  
        })  
    }, [searchQuery]);

    return(
        <div className="weatherContainer">
            <header className="weather-header">
            <h3>Weather Forecast<i className="material-icons">wb_sunny</i></h3>
            <React.Fragment>
                <SearchComponent searchCity={Search} ></SearchComponent>
            </React.Fragment>
            </header>
            <div className="currentWeather">
            {errorData.cod === "404" || errorData.cod === "400" ? (
                    <p></p>
                ) : <CurrentWeather values={currentData}/>}  
            </div>
            <div className="container">
                <div className="row justify-content-center">
                {errorData.cod === "404" || errorData.cod === "400" ? (
                    <p className="errorMessage">{errorData.message}</p>
                ) :  
                <DailyWeatherCards values={dailyData}></DailyWeatherCards>
                }   
                </div> 
            </div>
        </div>
    )
}
export default WeatherContainer;