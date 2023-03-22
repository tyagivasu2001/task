const express =require('express');
const app=express();
const path = require('path');
const { MongoClient } = require('mongodb');
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
app.use(express.static('public'));


app.get('/',(req,res)=>{

})
app.get('/book',(req,res)=>{
    
})


app.listen(3000,()=>{
     client.connect();
    let database =client.db('Restaurent').createCollection('Tablebooking');
    console.log("Node is running on port 3000!!")
})
