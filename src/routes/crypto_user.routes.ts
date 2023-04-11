import express from 'express'
import { cryptoUserController } from '../controllers/crypto_user.controller'


const router = express.Router()

router.post('/add', cryptoUserController.addOrder)
router.get('/get/:id', cryptoUserController.getCryptosByUserId)
router.put('/update', cryptoUserController.updateOrder)

export default router