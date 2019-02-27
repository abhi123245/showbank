const express = require("express");
var ex = express();
var Form =require("../Schema/Form1");
const bodyparser = require("body-Parser");

var router = express.Router();
router.use(bodyparser.json())
router.route("/")
.get((req,res,next)=>
{
console.log("this is a get request page");
res.end("this is a get  request page of AgentSignUp")
})
.post((req,res,next)=>
{
Form.Agent1.findOne({Agent_Id:req.body.Lead_id},function(error,docs){
    console.log(docs.Agent_Id);
  if(docs.Agent_Roll=="TL"||docs.Agent_Roll=="Manager"){  
Form.Agent1.create({
    Agent_Name:req.body.Agent_Name,
    Agent_Id: req.body.Agent_Id, 
    Agent_Email:req.body.Agent_Email,
    Agent_Roll:req.body.Agent_Roll,
    Agent_Age:req.body.Agent_Age,
    Lead_id:req.body.Lead_id,
    Branch_Name:req.body.Branch_Name
})

.then((data)=>
{
    console.log("data inserted succesfuly and you are reporting to "+docs.Agent_Name);
    res.end("data inserted succesfuly and you are reporting to "+docs.Agent_Name);
})
}
else{
    console.log("plzz report to the TL Not a Staff ");
    res.end("plzz report to the TL Not a Staff  ");
}
})
});
module.exports=router;