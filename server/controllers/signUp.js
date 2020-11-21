const mysql = require('mysql2');
//const express = require('express');

const app =express();

const db = require('../connection');
exports.signUp = async (req,res)=>{
    let password = req.body.password;
    
    console.log(password)
}
