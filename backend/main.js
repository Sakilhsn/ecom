const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
var cookieParser = require('cookie-parser');

dotenv.config({path: './config.env'});
require("./db/conn");
//const User= require('./model/userSchema');

app.use(express.json());
app.use(cookieParser());


//we link the router files to make our route easy
app.use(require('./router/auth'));

const PORT=process.env.PORT;

app.get('/contact', (req,res)=> {
    res.send ('Hello contact the world form the server');
});

// app.get('/about', middleware,(req,res)=> {
//     console.log('hello this is middleware');

//     res.send ('Hello about the world form the server');
// });

app.get('/login', (req,res)=> {
    res.send ('Hello world form the server in login');
});


app.listen(PORT,()=> {
    console.log(' server is running at port number  4000');
});