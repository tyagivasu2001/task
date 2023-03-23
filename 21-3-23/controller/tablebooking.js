const client = require('../model/clientConnect');
const path = require('path');

async function setData(req, res) {
    const data = JSON.parse(req.params.data);
    console.log(data);
    const flag = await client.db('Restaurant').collection('tables').insertOne(data);
    if(flag) {
        console.log('Element Added');
    }else {
        console.log('error');
    }
}

async function getData(req, res) {
    res.send("Hello");
}

async function deleteData(req, res) {
    const data = JSON.parse(req.params.data);
    const flag = await client.db('Restaurant').collection('tables').deleteOne({
        date : data.date,
        time : data.time,
        seat : data.seat
    })
    if(flag) {
        console.log("Deleted");
    }else {
        console.log("Error");
    }
}

async function findData(req, res) {
    const data = JSON.parse(req.params.data);
    console.log(data);
    const obj = await client.db('Restaurant').collection('tables').findOne({
        date : data.date,
        time : data.time,
        seat : data.seat
    });
    if(obj != null) {
        console.log("True");
    }else {
        console.log("False");
    }
}

const pageView = (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
}

module.exports = {setData, getData, deleteData, findData, pageView};