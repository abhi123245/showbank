const mongo = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongo);
const Form = mongo.Schema;

const custdefoult =new Form({
Name:{
    type : String,
     require : true ,
  //  unique :true
},
  Mobile:{
    type : String,
    require : true ,
    ////unique :true
},
Email:{
    type : String,
    require : true 
},
Address:{
    type : String,
    require : true 
},
DOB :
{
    type: String,
   require : true 
},

ADHAR_NUMBER:{
 type: String,
   require : true 
},

ACCOUNT_TYPE:{
 type: String,
 require : true 
},

Agent_Id:
{
    type: String,
   require : true 
},
Branch_Name:
{
    type: String,
 require : true 
     
},
OTP:
{
    type: String,
     require : true 
},

ACCOUNT_STATUS:
{
    type: Boolean,
 default: false
},


});
 var custdefoult1 = mongo.model('defaultBank',custdefoult); 


const custMain =new Form({
Name:{
    type : String,
     require : true ,
  //  unique :true
},
  Mobile:{
    type : Number,
    require : true ,
    ////unique :true
},
Email:{
    type : String,
    require : true 
},
Address:{
    type : String,
    require : true 
},
DOB :
{
    type: String,
   require : true 
},

ADHAR_NUMBER:{
 type: Number,
   require : true 
},

ACCOUNT_TYPE:{
 type: String,
 require : true 
},

Agent_Id:
{
    type: Number,
   require : true 
},
Branch_Name:
{
    type: String,
 require : true 
     
},
ACCOUNT_STATUS:
{
    type: Boolean,
 default: false
},

JOIN_DATE:
{
    type: String,
    
},
CLOSE_DATE:
{
    type: String,
}
});
 var custMain1 = mongo.model('MainBank',custMain); 


 const Agent =new Form({
Agent_Name:{
    type : String,
     require : true ,
  //  unique :true
},
Agent_Id:{
 type:Number
},
Agent_Email:{
    type : String,
    require : true 
},
Agent_Roll:
{
    type: String,
   require : true 
},
Agent_Age:
{
    type: Number,
   require : true 
},

Lead_id:
{
    type: Number,
   require : true 
},

Branch_Name:
{
    type: String,
 require : true 
     
} ,

});
var Agent1= mongo.model('AgentBank',Agent); 


    Agent.plugin( AutoIncrement, {inc_field: 'Agent_Id'});
    module.exports={

        custdefoult1:custdefoult1, 
        custMain1:custMain1,
        Agent1:Agent1
    };