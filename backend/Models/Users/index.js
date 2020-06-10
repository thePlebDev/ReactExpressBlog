//we need a username password, created at, display name and bio.
const mongoose = require('mongoose')
const bcrypt = require("bcrypt-nodejs");

const Schema = mongoose.Schema;
const SALT_FACTOR = 10;


const userSchema = new Schema({
  username:{type:String,required:true,unique:true},
  password: {type:String,required:true},
  createdAt:{type:Date,default:Date.now()},
  bio:String
})

userSchema.methods.giveUserNameBio = function(){
  console.log(this.name)
  console.log(this.bio)
}




const noop = function (){}

userSchema.pre("save",function(done){
  const user = this;
  if (!user.isModified("password")){
    return done();
  }
  bcrypt.genSalt(SALT_FACTOR,function(err,salt){
    if (err){return done(err); }
    bcrypt.hash(user.password, salt, noop,
      function(err,hashedPassword){
        if(err) {return done(err); }
        user.password = hashedPassword;
        done();
      });
  });
});

userSchema.methods.checkPassword = function(guess,done){
  bcrypt.compare(guess, this.password, function(err,isMatch){
    done(err,isMatch);
  })
}

const User = mongoose.model('User',userSchema)

module.exports = User
