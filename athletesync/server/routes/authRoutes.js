import {Router} from "express"
import {registro, login, logout} from '../controlers/authCrontolers.js'
import {competencia} from '../controlers/authCompetencias.js'
import {registroCompetencias} from '../controlers/authRegistrosComp.js'

const router = Router()

router.post('/registro', registro)
router.post('/login' , login)
router.post('/logout' , logout)
router.post('/competencia' , competencia)
router.post('/registroCompetencia' , registroCompetencias)

export default router