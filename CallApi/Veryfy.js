const express = require("express");
var ex = express();
const Form = require("../Schema/Form1");
const bodyparser = require("body-parser");
const SendOtp = require('sendotp');
var senderid="PRIIND";
const sendOtp = new SendOtp('262037Az3gB5PtU5c5e690c', 'Otp for your order is {{otp}}, please do not share it with anybody');
var router = express.Router();
router.use(bodyparser.json())
router.route("/")
.get((req,res,next)=>
{
    console.log("this page is get request for veryfyAcuunt");
    res.send("this page is get request for veryfy accunt");
})
.post((req,res,next)=>
{
Form.custdefoult1.findOne({Mobile:req.body.mobile},function(err,doc){
    if(doc.OTP==req.body.otp){
console.log("your account is veryfy and your account is activated");
var datetime = new Date();
 
Form.custMain1.create({
                     Name: doc.Name,
                     Mobile:  doc.Mobile,
                     Email: doc.Email,
                     Address: doc.Address,
                     DOB :  doc.DOB ,
                     ADHAR_NUMBER: doc.ADHAR_NUMBER,
                     ACCOUNT_TYPE : doc.ACCOUNT_TYPE,
                     Agent_Id : doc.Agent_Id,
                     Branch_Name : doc.Branch_Name,
                     OTP :doc.OTP,
                    JOIN_DATE: datetime,
                    ACCOUNT_STATUS:true

})
.then((data)=>{

           sendOtp.send(doc.Mobile, senderid,  (callback) =>{
  console.log(data);
                });


    doc.remove();
    console.log("delete accunt from defoult db and store the main database");
})
}
else
console.log("your otp wrong plz try again");

})
 .then((data)=>
 {
     res.end("your account is veryfy and your account is activated");
    }
    ,(err)=>console.log(err))
.catch((err)=>console.log(err))  




    console.log("this spage is post request for veryfy acunt");
    
})
module.exports=router;