const express = require("express");
var ex = express();
const Form1= require("../Schema/Form2");
const bodyparser = require("body-Parser");
var router = express.Router();
router.use(bodyparser.json())
router.route("/")

.post(async (req,res,next)=>
{
    await
Form1.branch1.findOne({branch_id:req.body.branch_id})
.then((data)=>
{
    var branch_name=data.branch_name;




 Form1.user1.create({
     agent_id:'',
     agent_name:req.body.agent_name,
     agent_email:req.body.agent_email,
     agent_rol:req.body.agent_rol,
     agent_age:req.body.agent_age,
     lead_id:req.body.lead_id,
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
     Form1.branch1.find({})
     .then((data)=>
     {
         res.send(data);
     })

})

module.exports=router;