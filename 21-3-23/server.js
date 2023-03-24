const express = require('express');
const app = express();
const cors=require('cors');
app.use(cors({origin:"*"}));
const router =require("./route/router");
app.use(express.static("public"))
app.use("/",router);
app.listen(3000,()=>{
   console.log("app Started at port 3000!");
})

