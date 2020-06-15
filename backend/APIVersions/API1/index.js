const express = require('express');
const passport = require("passport");
const flash = require("connect-flash");

const UserModel = require('../../Models/Users')

const apiV1 = express.Router()


apiV1.get('/login',function(req,res){
  res.send('on the login page')
})

apiV1.post('/login',(req,res,next)=>{
  passport.authenticate('login', function(error,user,info){
    console.log('----------------------------')
    console.log(error)
    console.log(user)
    console.log(info)
    console.log('----------------------------')
    if(error){
      return res.status(500).json({
        message:'Ooops,something happened',
        error: error.message || 'internal server error'
      });
    }

    if(!user){
      return res.status(200).json({
        message:'Username or password incorrect',
        found: false
      })
    }
    return res.json({
      message: 'User is now authenticated!!!',
      found: true
    });

  })(req,res,next)
})



apiV1.post("/signup", async function(req,res,next){ //THIS WHOLE THING IS NOT GETTING CALLED
   const {username,password} = req.body;

   UserModel.findOne({username})
   .then(doc=>{
     //IF THE USERNAME ALREADY EXISTS
     if(doc){
       res.json({message:"User already exists"})
     }else{
       //IF THE USERNAME DOES NOT EXISTS
       const newUser = new UserModel({username,password})
       newUser.save()
       .then(()=>{res.json({message:"User Created"})})
       .catch(error=>{res.status(500).json({message:error.message})})
     }
   })
   .catch(error=>console.log( `Caught: ${error.message}`))
}
)

function ensureAuthenticated(req, res, next){
  if (req.isAuthenticated()){
    next();
  }else{
    res.json({authenticated:false})
  }
}



module.exports = apiV1
