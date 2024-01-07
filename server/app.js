const express = require('express')
const mongoose  = require('mongoose')
const app = express()
require("dotenv").config()
const cors = require('cors')

// middleware
app.use(express.json())
app.use(cors({
  origin: "http://localhost:3000"
}))


// connect mongoDB
mongoose.connect(process.env.MONGODB_URI).then(() =>{
  const PORT = process.env.PORT || 8000
  app.listen(PORT, (req, res) =>{
    console.log(`The server is running on port ${PORT}`)
  })
}).catch(err => console.log(err))

// route
app.get('/', (req, res) =>{
  res.status(201).json({message: 'Connected to Backend!'})
})

// password 
// 1tDWtTxDVvigPlK0
// username
// testingMernDeploy