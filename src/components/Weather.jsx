import React from 'react';
import humidity_icon from "../assets/humidity.png";
import wind_icon from "../assets/wind.png";

export const Weather = ({ data}) => {
  return (
    <div className="weather">
        <div className="weather-image">
          <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt="" />
        </div>
        <div className="weather-temp">{data.main.temp}°C</div>
        <div className="weather-location">{data.name}</div>
        <div className="weather-details">
          <div className="weather-details-item">
            <img src={humidity_icon} alt="" />
            <div className="data">
              <div className="data__info">{data.main.humidity}%</div>
              <div className="data__label">Humidity</div>
            </div>
          </div>
          <div className="weather-details-item">
            <img src={wind_icon} alt="" />
            <div className="data">
              <div className="data__info">{data.wind.speed} km/h</div>
              <div className="data__label">Wind speed</div>
            </div>
          </div>
        </div>
      </div>
  )
}
