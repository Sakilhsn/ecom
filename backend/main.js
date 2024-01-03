const express = require('express');
const app = express();
// middleware
const middleware = (req,res,next)=>{
    console.log('hello this is my middleware');
    next()
}

app.get('/',middleware, (req,res)=> {
    res.send ('Hello world form the server');
});
app.get('/contact', (req,res)=> {
    res.send ('Hello contact the world form the server');
});
app.get('/about', (req,res)=> {
    res.send ('Hello about the world form the server');
});
app.get('/login', (req,res)=> {
    res.send ('Hello world form the server in login');
});


app.listen(4000,()=> {
    console.log(' server is running at port number 4000');
});
