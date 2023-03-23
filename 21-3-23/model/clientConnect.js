const {MongoClient} = require('mongodb');
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function connection() {
    try {
        await client.connect();
        await client.db('Restaurant').collection('tables');
    }catch(e) {
        console.log(e);
    }
}
connection();
module.exports = client;
