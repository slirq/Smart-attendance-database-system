const express = require('express');
const signIn = require('./controllers/signIn');
const signUp = require('./controllers/signUp');
const cam = require('./controllers/cam');
const stuDashBoard = require('./controllers/stuDashBoard')
const staffDashBoard = require('./controllers/staffDashBoard')
const cors = require('cors');
const port = 5000;
const app = express();

app.use(express.json({ extended: false }) );
app.use(cors())
app.post('/signIn',signIn.signIn)
app.post('/signUp',signUp.signUp)
app.post('/getAttendance',stuDashBoard.stuDashBoard)
app.post('/getStaffInfo',staffDashBoard.staffDashBoard)
app.post('/cam',cam.cam)
app.get('/',(req,res)=>{res.redirect('/signIn')})

app.listen(port,()=>{console.log(`server is running on ${port}`)})  
