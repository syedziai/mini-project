const credentials=require("../Credentials/credentials");
let url=`mongodb+srv://syedziai:${credentials.user_password}@syed.ssnycpy.mongodb.net/?retryWrites=true&w=majority`;
module.exports=url;