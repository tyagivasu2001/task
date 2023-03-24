const {MongoClient}=require('mongodb');
const url="mongodb://localhost:27017";
const client =new MongoClient(url);
async function createdatabase(){
    try{
        await client.connect();
        console.log("created");
    }
    catch(e){
        console.log(e);
    }
}
createdatabase();
module.exports=client;
