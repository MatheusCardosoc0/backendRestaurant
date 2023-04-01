import {Router} from 'express'
import { LoginUserController } from './controllers/user/LoginUserController'
import { RegisterUserController } from './controllers/user/RegisterUserController'

export const router = Router()

router.get('/', (req, res) => {return res.json({name: "dddd"})})

router.post('/login', new LoginUserController().handle)
router.post('/register', new RegisterUserController().handle)