import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY

const getWeatherData = (query) => {
  return axios.get(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${query}`)
}

export default getWeatherData