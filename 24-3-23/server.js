const express=require('express');
const app=express();
const mongoose=require('mongoose');
const users= require('./model/users');

mongoose.connect('mongodb://localhost:27017/pagination',{useNewUrlParser:true,UseUnifiedTopology:true})
const db =mongoose.connection
db.once('open',async()=>{
if(await users.countDocuments().exec()>0) return
 Promise.all([]

 ).then(()=>{
    users.create({
        name:"User1"
    }),
    users.create({
        name:"User2"
    }),
    users.create({
        name:"User3"
    }),
    users.create({
        name:"User4"
    }),
    users.create({
        name:"User5"
    }),
    users.create({
        name:"User6"
    }),
    users.create({
        name:"User7"
    }),
    users.create({
        name:"User8"
    }),
    users.create({
        name:"User9"
    }),
    users.create({
        name:"User10"
    })
    
    console.log("Add User");
 })
})
app.get('/user',paginatedResults(users),(req,res)=>{
    res.json(res.paginatedResults)
})

function paginatedResults(model){
    return async (req,res,next)=>{
        const page=parseInt(req.query.page);
    const limit=parseInt(req.query.limit);

    const startIndex = (page-1)*limit;
    const endIndex= page*limit;
    const results={}
    const result={}
 if(endIndex< await model.countDocuments().exec()){
    
    result.next =
    {
        page:page+1,
        limit:limit
    }
}
    if(startIndex >0){
    result.previous ={
        page:page-1,
        limit:limit
    }
}
     try{
    results.results = await model.find().limit(limit).skip(startIndex).exec();
    res.paginatedResults = results;
    next();
    }catch(e){
        res.send(e);
    }
}

}
app.listen(2003);
