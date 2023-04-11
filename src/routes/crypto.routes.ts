import express from 'express'
import { cryptoController } from '../controllers/crypto.controller'


const router = express.Router()

router.get('/all', cryptoController.getAllCryptos)

export default router