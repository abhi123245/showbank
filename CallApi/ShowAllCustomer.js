const express = require("express");


var ex = express();
const Form = require("../Schema/Form1");
var router = express.Router();
router.route("/")

.get((req,res,next)=>
{
    res.end("plzz check acunt Activate or NotActivate");
})
router.get("/Activate",(req,res,next)=>
{
Form.custMain1.find({})
.then((data)=>
{
console.log(data);
res.statusCode=200;
res.setHeader('content-type', 'plain/text');
res.end("your data is"+data);
})
});




router.get("/NotActivate",(req,res,next)=>
{
Form.custdefoult1.find({})
.then((data)=>
{
console.log(data);
res.statusCode=200;
res.setHeader('content-type', 'plain/text');
res.end("your data is"+data);
})
})

module.exports=router;