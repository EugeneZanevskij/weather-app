import './App.css';
import { fetchWeather } from './api';
import { WeatherApp } from './components/WeatherApp';

function App() {
  return (
    <div>
      <WeatherApp />  
      <h1>Weather App</h1>
      fetchWeather()
      {/* {process.env.REACT_APP_KEY} */}
    </div>
  );
}

export default App;
