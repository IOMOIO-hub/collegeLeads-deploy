import express from "express"
import cors from "cors"

import leadRouter from "./endpoints/lead/leadRouter.js"

const app = express()

app.use(cors())
app.use(express.json())
app.use("/lead", leadRouter)

const PORT = process.env.PORT || 5000

const start = () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server has been started on port ${PORT}...`)
    })
  } catch (e) {
    console.log(e)
  }
}

start()
