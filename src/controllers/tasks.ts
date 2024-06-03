import express, { Request, Response } from 'express'
import { Task, TaskInput } from '../interfaces/taks'
const taskRouter = express.Router()

const tasks: TaskInput[] = [
  {
    id: 1,
    name: 'Bring milk and bread.',
  },
  {
    id: 2,
    name: 'Walk the dogs.',
  },
]

taskRouter.get('/', (req: Request, res: Response) => {
  res.send(tasks)
})

taskRouter.post('/', async (req: Request, res: Response) => {
  const task: TaskInput = {
    id: Math.floor(Math.random() * (100 - 1) + 1),
    name: req.body.name,
  }

  const taskCreated = await Task.create(task)
  console.log('🚀 ~ taskRouter.post ~ taskCreated:', taskCreated)
  tasks.push(task)

  res.send(task)
})

export default taskRouter
