import axios from "axios";

const getCountriesData = () => {
  return axios.get('https://restcountries.com/v3.1/all')
}

export default getCountriesData