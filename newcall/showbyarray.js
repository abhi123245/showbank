const express = require("express");
var ex = express();
const Form = require("../Schema/Form2");
const bodyparser = require("body-parser");
var router = express.Router();
router.use(bodyparser.json())


router.route("/")
.get(async (req,res,next)=>
{
 console.log("you are a Manager");
  var p1 = Form.branch1.find({});
  
  var p2=  await Form.user1.aggregate([{
        $match:({agent_rol: "Manager"})
  },
    
     {
         $lookup:{
                    from: "users" ,
                    localField:"agent_id",
                    foreignField:"lead_id",
                    as:  "Tl"  ,
         
     }}])
  var p3 =  await Form.user1.aggregate([{
        $match:({agent_rol: "STAFF"})
  },
    
     {
         $lookup:{
                    from: "customers" ,
                    localField:"agent_id",
                    foreignField:"agent_id",
                    as:  "customer"  ,
         
     }}])
Promise.all([p1, p2,p3]).then(values => { 
  //res.send(values[0][0].branch_id); // 

for(var i=0;i<1;i++){
for(var j=0;j<values[i].length;j++){
    var branch_name=values[i+1][j].branch_name;
    var branch_name1=values[i][j].branch_name;
    if(branch_name==branch_name1){
        values[i][j].Manager=values[i+1];}
     else{
}
for(var m=0;m<values[i][j].Manager.length;m++){
    for(var t=0;t<values[i][j].Manager[m].Tl.length;t++){
          console.log("Dsds");
          for(var s=0;s<values[i+2].length;s++){
    var agent_id=values[i][j].Manager[m].Tl[t].agent_id;
     var lead_id=values[i+2][s].lead_id;
      console.log(values[i+2][s].lead_id)
     console.log(values[i][j].Manager[m].Tl[t].agent_id)
    if(agent_id==lead_id){
       values[i][j].Manager[m].Tl[t].Staff=values[i+2][s];}
     else{
}
          }
}
}
}}
res.send(values[0]);


});
})
module.exports=router;