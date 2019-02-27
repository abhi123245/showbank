const express = require("express");
var ex = express();
const Form1= require("../Schema/Form2");
const bodyparser = require("body-Parser");
var router = express.Router();
router.use(bodyparser.json())
router.route("/")

.post(async (req,res,next)=>
{

await Form1.branch1.create({
     branch_id:req.body.branch_id,
     branch_name:req.body.branch_name
 })
 .then((data)=>
{
console.log("data inserted");
})
})
module.exports=router;