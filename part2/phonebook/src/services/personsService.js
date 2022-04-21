import axios from "axios"

const baseUrl = 'http://localhost:3001'

const getAll = () => {
  return axios
    .get(`${baseUrl}/persons`)
    .then(response => response.data)
}

const createEntry = (personToAdd) => {
  return axios
    .post(`${baseUrl}/persons`, personToAdd)
    .then(response => response.data)
}

const deleteEntry = (id) => {
  return axios
    .delete(`${baseUrl}/persons/${id}`)
    .then(response => response)
}

export default { getAll, createEntry, deleteEntry }