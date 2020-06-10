const express = require('express');
const mongoose = require('mongoose');
const apiV1 = require('./APIVersions/API1');
const app = express()

//CONNECTING TO ATLAS
const url ='mongodb+srv://camoSheets:vQFvBxS67LILByJX@cluster0-xgzqn.mongodb.net/<dbname>?retryWrites=true&w=majority'
mongoose.connect(url,{useNewUrlParser:true, useUnifiedTopology: true})
.then(()=>console.log('CONNECTED TO MongoDB'))
.catch(err=> console.log(err))


//API VERSIONING
app.use('/v1',apiV1)

//USE THE ENVIROMENT PORT OR PORT 5000 IF NO ENVIROMENT PORT 
const port = process.env.PORT || 5000;
app.listen(port,()=>console.log(`we are listening on port ${port}`));
