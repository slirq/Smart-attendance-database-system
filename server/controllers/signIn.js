const mysql = require('mysql');
const express = require('express');
const app =express();
app.use(
    express.json({ extended: false, })
  );
const db = require('../connection');
exports.signIn = async (req,res)=>{
    let password = req.body.password;
    console.log(password)
}

