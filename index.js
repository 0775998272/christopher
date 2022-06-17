const express= require('express');
const bodyParser =require('body-parser');
const mongoose = require('mongoose')
const router = require('./routes/Api')
const user1=require('./model/Schema')

const app = express();

// connect to mango db
mongoose.connect('mongodb://localhost:3000/orders');
mongoose.Promise=global.Promise;

app.get('/', (req, res)=>{
    res.send('HELLO FROM HOME PAGE1',)});

//listen fo

app.listen(process.env.port ||3000,() => {
    console.log('server listening on port:3000');
});

