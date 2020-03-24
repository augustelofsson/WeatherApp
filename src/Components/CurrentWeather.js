import React from 'react';
var moment  = require('moment');

const CurrentWeather = (props) => {

    let newDate = new Date();
        const weekday = props.values.date * 1000
        newDate.setTime(weekday)

    const weatherImg = `owf owf-${props.values.weatherid} owf-3x`;
    
    return(<div>
    <h4>Current weather in {props.values.city}, {props.values.country}</h4>
        <p className="text-muted">{moment(newDate).format('MMMM Do')}</p>
        <p>Temp: {Math.round(props.values.temp * 10) / 10}°C</p>       
        <p>{props.values.desc} <i className={weatherImg}></i></p>

    </div>)
    
    
}
export default CurrentWeather