const schema = require("../model/tablemodel");
const client = require("../model/connection");
const path = require('path');
async function getTable(req, res) {
    res.send("hello");

}
let object, flag;
async function inserttable(req, res) {
    const obj = JSON.parse(req.params.obj);
    object = new schema({
        date: obj.date,
        table: obj.table,
        time: obj.time
    });
    let data = await client.db('Restaurant').collection('tables').findOne({
        date:object.date,
        time:object.time,
        table:object.table
    });
    if(data == null) {
        await client.db('Restaurant').collection("tables").insertOne(object);
    }
}

async function PresentTable(req, res) {
    const obj = JSON.parse(req.params.obj);
    const object = new schema({
        date: obj.date,
        table: obj.table,
        time: obj.time
    });
    flag = await  client.db('Restaurant').collection("tables").findOne({
        date:object.date,
        time:object.time,
        table:object.table
    });
}

async function searchResult(req, res) {
    if(flag != null) {
        res.send("false");
    }
}


async function deleteTable(req, res) {
    const obj = JSON.parse(req.params.obj);
    const object = new schema({
        date: obj.date,
        table: obj.table,
        time: obj.time
    });
    await client.db('Restaurant').collection("tables").deleteOne({
        date:object.date,
        time:object.time,
        table:object.table
    });
    res.send('SUCCESS');
}
async function displayTable(req, res) {
    res.send(object);
}
async function displaypage(req, res) {
    res.sendFile(path.join(__dirname, ("../public/index.html")));
}

module.exports = { getTable, PresentTable, deleteTable, displayTable, inserttable, displaypage, searchResult};