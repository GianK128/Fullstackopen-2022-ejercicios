import React, { useEffect, useState } from "react";
import getWeatherData from '../services/getWeatherData'

const Country = ({ data }) => {
  const [weather, setWeather] = useState({})
  
  useEffect(() => {
    getWeatherData(data.name.common)
      .then(response => {
        console.log(response.data.current)
        setWeather(response.data.current)
      })
  },[])
  
  return (
    <div>
      <h1>{data.name.common}</h1>
      <p>{data.name.official}</p>
      <p>Capital: {data.capital[0]}</p>
      <p>Population: {data.population}</p>
      <img src={data.flags.png} alt={"Country Flag"}></img>
      <h2>Languages</h2>
      <ul>
        {Object.entries(data.languages).map(([key, lang]) =>
          <li key={key}>{lang}</li> 
        )}
      </ul>
      <h2>Weather in {data.capital[0]}</h2>
      <p>Temperature: {weather.temperature} °C</p>
      <img src={weather.weather_icons} alt={"Weather icon"}></img>
      <p>Wind: {weather.wind_speed} mph / direction {weather.wind_dir} {weather.wind_degree}°</p>
    </div>
 )
}

export default Country