import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import taskRouter from './controllers/tasks'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World')
})

app.use('/tasks', taskRouter)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
