import express from 'express'
import { userController } from '../controllers/user.controller'


const router = express.Router()

router.post('/add', userController.addUser)
router.get('/all', userController.getAllUsers)
router.get('/get/:id', userController.getUserById)
router.post('/login', userController.getUserbyUsernameAndPassword)

// router.put('/update', userController.getUserById)

export default router