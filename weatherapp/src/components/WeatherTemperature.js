import React from 'react';
import WeatherIcons from 'react-weathericons'

const getWeatherIcon = (weatherState) => {
    switch (weatherState) {
        case value:
            return(<WeatherIcons name="sleet" size="2x" />);
            break;
        default:
            return(<WeatherIcons name="sleet" size="2x" />);
    }    
};

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div>
        {getWeatherIcon(weatherState)}
        <WeatherIcons name="sleet" size="2x" />
        <span>{`${temperature} °C`}</span>
    </div>
);

export default WeatherTemperature;