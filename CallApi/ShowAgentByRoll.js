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
    console.log(req.session.user.Agent_Roll);
Form.Agent1.find({},function(error,docs){                                    
  if(req.session.user.Agent_Roll=="Manager"){       
 console.log("you are a Manager");
 Form.Agent1.aggregate([
    {$match:{"Lead_id" :docs.Agent_Id}},
     {
         $lookup:{
                    from: "agentbanks" ,
                    localField:"Agent_Id",
                    foreignField:"Lead_id",
                    as:  "Staff====>"  ,
         
     }},
    {
    $unwind: "$Staff====>"
},
        {      $lookup :{
                   from: "mainbanks" ,
                    localField:"Agent_Id",
                    foreignField:"Agent_id",
                    as:  "customer====>"  
               }       }   

        

 ]).then((data)=>{
     res.send(data);
 })
 
}})
}})

router.get("/TL",(req,res,next)=>
{
   console.log(req.session.user.Agent_Id);
Form.Agent1.find({Lead_id:req.session.user.Agent_Id},function(err,doc){
res.statusCode=200;

res.setHeader('content-type', 'plain/text');
res.end("your tl is"+doc);
})

.then((data)=>
{
console.log();

})
})

router.get("/staff",(req,res,next)=>
{
   
Form.Agent1.find({Agent_Id:req.quert.id},function(err,doc){
res.statusCode=200;
res.setHeader('content-type', 'plain/text');
res.end("your stafff is"+doc);
})

.then((data)=>
{
console.log();

})
})
router.get("/customer",(req,res,next)=>
{
   
Form.custMain1.find({Agent_Id:req.session.user.Agent_Id},function(err,doc){
res.statusCode=200;
res.setHeader('content-type', 'plain/text');
res.end("your customer  is"+doc);
})

.then((data)=>
{
console.log();

})
})







module.exports=router;