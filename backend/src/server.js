require("dotenv").config()
const app = require("./index")

const port = process.env.PORT || 3334

app.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})