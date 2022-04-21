import axios from "axios"

const baseUrl = 'http://localhost:3001'

const getAll = () => {
    return axios
      .get(`${baseUrl}/persons`)
      .then(response => response.data)
}

const create = (personToAdd) => {
    return axios
      .post(`${baseUrl}/persons`, personToAdd)
      .then(response => response.data)
}

export default { getAll, create }