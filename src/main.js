const express = require("express")
const dotenv = require("dotenv")

dotenv.config()

const app = express()
const PORT = process.env.PORT

app.get("/", (req, res) => {
  res.send("Hello World")
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})