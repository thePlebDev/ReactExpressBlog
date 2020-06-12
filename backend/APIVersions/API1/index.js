const express = require('express');
const passport = require("passport");
const flash = require("connect-flash");

const UserModel = require('../../Models/Users')
const dbCheck = require('../../utils/CheckDBFunction')
const apiV1 = express.Router()



apiV1.get('/test',(req,res)=>{
  console.log('everything is working')
  res.send('TESTING TO MAKE SURE EVERYTHING WORKS')
})

apiV1.post("/signup", async function(req,res,next){ //THIS WHOLE THING IS NOT GETTING CALLED
  console.log('we have gotten this farh')
   const {username,password} = req.body;
   const usernameValue = await dbCheck(UserModel,{username})
   console.log('------------------------------')
   console.log(usernameValue)
   console.log('------------------------------')
   if(usernameValue){
     console.log('USERNAME FOUND')
     res.send('USERNAME ALREADY EXISTS')

   }else{
    // Checks to see if username already exists in the database. if it doesnt, create new user document
     const newUser = new UserModel({
       username,
       password
     })
     newUser.save()
     .then(data=>console.log(data))  // this is the createdAt, the username and password
     .catch(error=>console.log(error))

     res.send('CREATING NEW USER') // this is what is getting sent back to the user.
   }

}
)

module.exports = apiV1
