import express, { Express, Request, Response } from "express"

const dotenv = require("dotenv")

const tasks = require("./controllers/tasks")

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World")
})

app.use("/tasks", tasks)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
