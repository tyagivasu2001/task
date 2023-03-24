const mongoose=require('mongoose');
 
const tableobject = new mongoose.Schema({
      date:String,
      table:String,
      time:String

})
module.exports= mongoose.model('tableobject',tableobject);