const {MongoClient} = require('mongodb');
const uri = 'mongodb://127.0.0.1:27017'
const client = new MongoClient(uri);

async function connectDatabase() {
    try {
        await client.connect();
        const db=await client.db('Student').collection('results');
        await console.log("Success");
        //await Inputdata(db); //(to insert a single value)
        //await Inputdata2(db); //(to insert multiple values )
        // await Deleteone(db); //(to delete the data);
        //  await Finddata(db); //(to find the values present in database)
        await  Update(db);

    }catch(e) {
        await console.log(e);
    }finally {
        await client.close();
    }
}

async function Inputdata(db){
 const studentdata={
    name:"Vasu tyagi",
    rollno:51,
    marks:480,
    status:"pass"
 }
 await db.insertOne(studentdata);

}
async function Inputdata2(db){

    const collegedata=[{
        name:"ravi",
        rollno:2,
        marks:380,
        status:"pass"
    },
    {   name:"tanvi",
        rollno:55,
        marks:400,
        status:"pass"

       
    }

]
await db.insertMany(collegedata);
}
async function Deleteone(db){
 const deletedata={
    name:"ravi",
        rollno:2,
        marks:380,
        status:"pass"

 }
 await db.deleteOne(deletedata);
 console.log("deleted");

}
async function Finddata(db){
    await console.log(await db.find().toArray());
}

async function Update(db){
  await db.updateOne({rollno:55},{$set:{marks:390}});
  await console.log(await db.find().toArray());  
}

connectDatabase();