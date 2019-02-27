const express = require("express");
var ex = express();
const Form1= require("../Schema/Form2");
const bodyparser = require("body-Parser");
var router = express.Router();
router.use(bodyparser.json())
router.route("/")

.post(async (req,res,next)=>
{
    
await Form1.branch1.findOne({branch_id:req.body.branch_id})
.then((data)=>
{
    var branch_name=data.branch_name;




 Form1.customer1 .create({
     agent_id: req.body.agent_id,
     customer_name:req.body.customer_name,
     customer_email:req.body.customer_email,
     customer_age:req.body.customer_age,
     branch_name:branch_name
})

})
 .then((data)=>
{
res.end("data inserted");
})
})
.get(async (req,res,next)=>
{   
    await  Form1.branch1.find({})
     .then((data)=>
     {
         res.send(data);
     })

})

module.exports=router;