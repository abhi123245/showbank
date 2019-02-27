const mongo = require("mongoose");
const  Form=mongo.Schema;
const AutoIncrement = require('mongoose-sequence')(mongo);

const customer= new Form({
   
agent_id:{
    type:Number,
    require:true
},
customer_name:{
    type:String,
    require: true
},

customer_email:
{
    type:String,
    require:true,
},

customer_age:
{
    type: String,
   require : true 
},
  branch_name:{
type:String,
require : true
}

})


 const user= new Form({
   
agent_id:{
    type:Number,
    require:true,
},
agent_name:{
    type:String,
    require: true
},

agent_email:
{
    type:String,
    require:true,
},
agent_rol:
{
    type: String,
   require : true 
},
agent_age:
{
    type: String,
   require : true 
},

lead_id:
{
    type: String,
   require : true 
},

  branch_name:{
type:String,
require : true
}, 
Tl:[],
Staff:[],
customer:[]
})

 
const branch= new Form({

branch_id:{
type:String,
require : true,
//unique : true
},    
branch_name:{
type:String,
require : true,
//unique : true
},
Manager:[]    
});
 var branch1 = mongo.model('branch',branch); 
var customer1 = mongo.model('customer',customer); 
var user1 = mongo.model('user',user); 

 user.plugin( AutoIncrement, {inc_field: 'agent_id'});
  module.exports={

       branch1:branch1, 
       user1:user1,
       customer1 :customer1 
   };