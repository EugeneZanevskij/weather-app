import axios from 'axios';

export const fetchWeather = (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_KEY}&units=metric`;
  return axios.get(url)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}