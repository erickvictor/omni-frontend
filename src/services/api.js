import axios from 'axios'

const api = axios.create({
  baseURL: 'https://omni-backend.herokuapp.com/',
})

export default api
