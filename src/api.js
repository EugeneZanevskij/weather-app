import axios from 'axios';

export const fetchWeather = (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_KEY}&units=metric`;
  try {
    const response = axios.get(url);
    return response.data;
  } catch (error) {
    return error;
  }
}