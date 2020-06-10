const express = require('express');
const bodyParser = require('body-parser');
const passport = require("passport");
const flash = require("connect-flash");

const UserModel = require('../../Models/Users')
const apiV1 = express.Router()



apiV1.use(bodyParser.urlencoded({ extended:true }))

apiV1.get('/test',(req,res)=>{
  console.log('everything is working')
  res.send('TESTING TO MAKE SURE EVERYTHING WORKS')
})

apiV1.post("/signup", function(req,res,next){
  // const username = req.body.username;
  // const password = req.body.password;
  const {user,psw} = req.body
  console.log(user,psw)
  res.send('TESTING TO MAKE SURE EVERYTHING WORKS')


//   UserModel.findOne({username:username},function(err,user){
//     if(err){return next(err);}
//     if (user){
//       req.flash("error","User already exists");
//       return res.redirect("/signup")
//     }
//     const newUser = new UserModel({
//       username:username,
//       password:password
//     });
//     newUser.save(next);
//   });
// }, passport.authenticate("login",{
//   successRedirect:"/login",
//   failureRedirect:"/signup",
//   failureFlash: true
// })
}
)

module.exports = apiV1
