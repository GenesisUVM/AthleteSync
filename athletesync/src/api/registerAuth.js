import axios from 'axios'

const API = 'http://localhost:4000/api'

export const registerCompetenciaRequest = registro => axios.post('http://localhost:4000/api/registroCompetencia', registro);
