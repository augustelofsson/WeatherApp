import React from 'react';
var moment  = require('moment');


const DailyWeatherCards = (props) => {

    let cards = props.values.map(card => {
        let newDate = new Date();
        const weekday = card.dt * 1000
        newDate.setTime(weekday)
        
        const weatherImg = `owf owf-${card.weather[0].id} owf-5x`;

        return(
        <div className="col-sm-2">
            <div className="card">
                <h3 className="card-title">{moment(newDate).format('dddd')}</h3>
                <p className="text-muted">{moment(newDate).format('MMMM Do')}</p>
                <i className={weatherImg}></i>
                <h2>{Math.round(card.main.temp)} °C</h2>
                <h5>{Math.round(card.main.temp_min * 10) / 10}°C / {Math.round(card.main.temp_max * 10) / 10}°C</h5>
                <p className="text-muted">Min / Max</p>
                <div className="card-body">
                    <p className="card-text">{card.weather[0].description}</p>
                </div>

            </div>

        </div>)
    });
    return(cards);
    
}
export default DailyWeatherCards;