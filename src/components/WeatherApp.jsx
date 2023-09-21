import React, { useState } from 'react';
import "./WeatherApp.css";
import search_icon from "../assets/search.png";

import { fetchWeather } from '../api.js';
import { Weather } from './Weather';

export const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [data, setData] = useState({});
  return (
    <div className="container">
      <div className="top-bar">
        <input 
          type="text" 
          className="cityInput" 
          placeholder="Enter a city" 
          value={city}
          onChange={(e) => {setCity(e.target.value); console.log(city); console.log(data);}}
        />
        <div 
          className="search-icon" 
          onClick={() => {
            fetchWeather(city)
              .then((result) => {
                setData(result);
                setCity('');
              })
              .catch((error) => {
                console.log(error); // Handle the error as needed
              });
          }}>
          <img src={search_icon} alt="" />
        </div>
      </div>
      {data.main ? <Weather data={data} /> : <h1 className="title">Weather app</h1> }
    </div>
  );
}
