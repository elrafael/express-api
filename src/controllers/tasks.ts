import express, { Request, Response } from "express"
import { Task } from "../interfaces/taks"
const router = express.Router()

const tasks: Task[] = [
  {
    id: 1,
    name: "Bring milk and bread.",
  },
  {
    id: 2,
    name: "Walk the dogs.",
  },
]

router.get("/", (req: Request, res: Response) => {
  res.send(tasks)
})

router.post("/", (req: Request, res: Response) => {
  const task: Task = {
    id: Math.floor(Math.random() * (100 - 1) + 1),
    name: req.body.name,
  }
  tasks.push(task)

  res.send(tasks)
})

module.exports = router
