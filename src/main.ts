import express, { Express, Request, Response } from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import taskRouter from './controllers/tasks'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000
const MONGODB_URL = process.env.MONGODB_URL || ''

app.use(express.json())

mongoose.connect(MONGODB_URL)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World')
})

app.use('/tasks', taskRouter)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
