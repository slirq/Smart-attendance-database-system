const express = require('express');
const Route = require('./controllers/signIn');
const port = 5000;
const app = express();
app.get('/signIn',Route.signIn)
app.listen(port,()=>{console.log(`server is ${port}`)})