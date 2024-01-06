const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

dotenv.config({path: './config.env'});
require("./db/conn");

const PORT=process.env.PORT;


// middleware
const middleware = (req,res,next)=>{
    console.log('hello this is my middleware');
    next()
}

app.get('/', (req,res)=> {
    res.send ('Hello world form the server');
});
app.get('/contact', (req,res)=> {
    res.send ('Hello contact the world form the server');
});
app.get('/about', middleware,(req,res)=> {
    console.log('hello this is middleware');

    res.send ('Hello about the world form the server');
});
app.get('/login', (req,res)=> {
    res.send ('Hello world form the server in login');
});


app.listen(PORT,()=> {
    console.log(' server is running at port number  ${PORT}');
});