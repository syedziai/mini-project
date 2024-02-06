const client = require("../client/client");
const express = require("express");
const db_details = require("../db_details/db_details");
const middleware=require("../middleware/middleware");
let watches = express.Router();
watches.get('/',middleware,async(req,res)=>{
    await client.connect();
    let arr=await client.db(db_details.database).collection(db_details.watches).find().toArray()
    res.json(arr);
})
module.exports=watches