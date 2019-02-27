const express = require("express");
var ex = express();
const Form = require("../Schema/Form1");
const bodyparser = require("body-parser");
var router = express.Router();
router.use(bodyparser.json())
router.route("/")
.get((req,res,next)=>
{
if(req.session[ 'user' ]==null){
console.log("you are not login plzz first one you are in ")
res.end("you are not login plzz first one you are in ")
}
else{   
Form.Agent1.find({})
.then((data)=>
{
console.log(data);
res.statusCode=200;
res.setHeader('content-type', 'plain/text');
res.end("your data is"+data);
})}
})

router.get("/FindCustomer",(req,res,next)=>
{
Form.custMain1.find({Agent_Id:req.body.id},function(err,doc){
res.statusCode=200;
res.setHeader('content-type', 'plain/text');
res.end("your data is"+doc);
})

.then((data)=>
{
console.log();

})
})
module.exports=router;