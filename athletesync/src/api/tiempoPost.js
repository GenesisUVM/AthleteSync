import axios from 'axios'

const API = 'http://localhost:4000/api'

export const registerTiempoRequest = tiempo => axios.post('http://localhost:4000/api/registroTiempo', tiempo);

