const express = require("express");
var ex = express();
var fs = require('fs');
const bodyparser = require("body-parser");
var y = new String("91")
var fs = require('fs'); 
var parse = require('csv-parse');
var csv = require('fast-csv');
const createCsvWriter = require('csv-writer').createObjectCsvWriter; 
var router = express.Router();
router.use(bodyparser.json())
router.route('/')
.get((req,res,next)=>{

    console.log("this is a request page");
})
.post((req,res,next)=>
{
      
     const createWrighter = createCsvWriter({
         path: 'file.csv',
         header:[
             {id:'Name',title:'Name'},
             {id:'Mobile',title:'Mobile'},
              {id:'Email',title:'Email'},
             {id:'Address',title:'Address'},
              {id:'DOB',title:'DOB'},
              {id:'ADHAR_NUMBER',title:'ADHAR_NUMBER'},
               {id:'ACCOUNT_TYPE',title:'ACCOUNT_TYPE'},
               {id:'Agent_Id',title:'Agent_Id'},
                {id:'Branch_Name',title:'Branch_Name'}
         ]
     });

   
         
console.log(y+(req.body.Mobile));

const data =[
    {
        Name: req.body.Name,
        Mobile:y+ req.body.Mobile,
        Email: req.body.Email,
        Address : req.body.Address,
        DOB : req.body.DOB,
        ADHAR_NUMBER: req.body.ADHAR_NUMBER,
        ACCOUNT_TYPE: req.body.ACCOUNT_TYPE,
        Agent_Id :req.body.Agent_Id,
        Branch_Name: req.body.Branch_Name
    }
    ]

createWrighter.writeRecords(data)
.then(()=>{
    console.log("csv file is created");
    res.end("your csv file iscreated ");
})





}

)

module.exports=router;