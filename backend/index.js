const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser')

const setUpPassport = require('./SetupPassport')
const apiV1 = require('./APIVersions/API1');
const app = express()
setUpPassport();

//CONNECTING TO ATLAS
const url ='mongodb+srv://camoSheets:vQFvBxS67LILByJX@cluster0-xgzqn.mongodb.net/<dbname>?retryWrites=true&w=majority'
mongoose.connect(url,{useNewUrlParser:true, useUnifiedTopology: true})
.then(()=>console.log('CONNECTED TO MongoDB'))
.catch(err=> console.log(err))

app.use(bodyParser.json())
app.use(cookieParser());
app.use(session({
  secret:'TKRv0IJs=HYqrvagQ#&!F!%V]Ww/4KiVs$s,<<MX',
  resave:true,
  saveUnitialized:false,
  cookie:{}
}));

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

//API VERSIONING
app.use('/v1',apiV1)

//USE THE ENVIROMENT PORT OR PORT 5000 IF NO ENVIROMENT PORT
const port = process.env.PORT || 5000;
app.listen(port,()=>console.log(`we are listening on port ${port}`));
