const express = require("express")
const dotenv = require("dotenv")

const tasks = require("./controllers/tasks")

dotenv.config()

const app = express()
const PORT = process.env.PORT

app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello World")
})

app.use("/tasks", tasks)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
