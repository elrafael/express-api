const express = require("express")
const router = express.Router()

const tasks = [
  {
    id: 1,
    name: "Bring milk and bread.",
  },
  {
    id: 2,
    name: "Walk the dogs.",
  },
]

router.get("/", (req, res) => {
  res.send(tasks)
})

router.post("/", (req, res) => {
  const task = {
    id: Math.floor(Math.random() * (100 - 1) + 1),
    name: req.body.name,
  }
  tasks.push(task)

  res.send(tasks)
})

module.exports = router
