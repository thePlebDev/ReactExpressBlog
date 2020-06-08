const express = require('express')

const apiV1 = require('./APIVersions/API1')
const app = express()


app.use('/v1',apiV1)


const port = process.env.PORT || 5000;
app.listen(port,()=>console.log(`we are listening on port ${port}`));
