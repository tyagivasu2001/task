const mongoose= require('mongoose');

const UserSChema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model('user',UserSChema);