const token=require("../token/token")
const middleware=(req,res,next)=>{
    let all_headers=req.headers;
    let react_token=all_headers.token
    console.log("react_token...",react_token)
    console.log("server_token...",token.server_token)
    if(token.server_token == react_token){
        next();
    }else{
        res.json({"auth":"failed"})
    }
}
module.exports=middleware