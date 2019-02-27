const express = require("express");
var ex = express();
const Form = require("../Schema/Form1");
const session = require("express-session");
//var session = require('client-sessions');
const CookieParser = require("Cookie-Parser");
const filestore = require("session-file-store")(session);
const bodyparser = require("body-parser");


var router = express.Router();
router.use(bodyparser.json())
router.route("/")

.post(function(req,res,next)

{
Form.Agent1.findOne({Agent_Id:req.body.Agent_Id},function(error,docs){
    console.log(docs.Agent_Id);
 if(docs.Agent_Email==req.body.Agent_Email) {
   
  req.session['user']=docs;
  console.log(req.session.user);
 }
else{
    console.log("plzz enter the correct password");
     res.end("plzz enter the correct password");
} 

})
.then((data)=>
{

res.statusCode=200;
res.setHeader('content-type', 'plain/text');
console.log("you are login sucessful");
    res.end("you are login succesfuly"); 
})
})
module.exports=router;