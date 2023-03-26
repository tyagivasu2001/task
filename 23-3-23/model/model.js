const mongoose = require('mongoose');

const schma = mongoose.Schema(
    {
        username : String,
        password : String,
        token: String
    }
);

const student = mongoose.model('data', schma);

module.exports = student;