import axios from 'axios'

const API = 'http://localhost:4000/api'

export const competenciaRequest = competencia => axios.post('http://localhost:4000/api/competencia', competencia);

