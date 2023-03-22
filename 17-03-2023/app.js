const { MongoClient } = require('mongodb');
const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);

async function create(){
    await client.connect();
    let datab = await client.db("University").collection('studentdata');
    client.close();
}

create();