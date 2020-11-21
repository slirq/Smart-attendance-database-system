const express = require('express');
const signIn = require('./controllers/signIn');
const cors = require('cors');
const port = 5000;
const app = express();
app.use(express.json({ extended: false }) );
app.use(cors())
app.post('/signIn',signIn.signIn)
app.listen(port,()=>{console.log(`server is running on ${port}`)})  