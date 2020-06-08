const express = require('express')
const apiV1 = express.Router()


apiV1.get('/test',(req,res)=>{
  res.send('TESTING TO MAKE SURE EVERYTHING WORKS')
})

module.exports = apiV1
