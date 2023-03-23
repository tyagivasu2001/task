const express =require('express');
const app=express();
app.use(express.static('public'));
const router = require('./routes/tablebooking');


app.use('/', router);



app.listen(3000,()=>{
    //  client.connect();
    // let database =client.db('Restaurent').createCollection('Tablebooking');
    console.log("Node is running on port 3000!!")
})
