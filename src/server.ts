import Express from 'express'
import cors from 'cors'
import { router } from './routes'

const app = Express()
app.use(Express.json())
app.use(cors())

app.use(router)

app.listen(3333)