const express = require("express")
const cors = require('cors');
require('./database');
const orderRoutes = require("./routes/orderRoutes")
const categoryRoutes = require("./routes/categoryRoutes")
const app = express()
app.use(express.json())
app.use(cors());
app.use("/orders", orderRoutes)
app.use("/categories", categoryRoutes)

app.use('/', (req, res) => {
  res.send("Bem vindo!")
})

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error)
  }
  res.status(error.code || 500)
  res.json({
    message: error.message || "An unknown error occurred!"
  })
})

module.exports = app