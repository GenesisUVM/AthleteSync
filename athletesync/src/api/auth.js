import axios from 'axios'

const API = 'http://localhost:4000/api'

export const registerRequest = usuario => axios.post('http://localhost:4000/api/registro', usuario);

