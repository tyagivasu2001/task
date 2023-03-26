const express = require('express');
const mongoose = require('mongoose');
const User = require('./model/model');
const app = express();

const router = require('./route/route')

app.use('/',router);

mongoose.connect('mongodb://localhost:27017/Auth').then(
    () => {
        console.log('connected');
        app.listen(5002, () => console.log(`Sucess`))
    }).catch((err) => { console.log(err); })