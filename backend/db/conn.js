const mongoose = require('mongoose');

const DB = process.env.DATABASE;
mongoose.set('debug',true)

mongoose.connect(DB, {
    useNewurlparser: true,
}).then(()  =>{
    console.log('CONNECTION SUCESSFUL');
}).catch((err) => console.log('no connection',err));