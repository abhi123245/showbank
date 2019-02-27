const express = require("express");
const CsvFile = require("./CallApi/CsvFile");
const SignUpAgent = require("./CallApi/SignUpAgent");
const ShowAllAgent = require("./CallApi/ShowAllAgent");
const branchsignup = require("./newcall/branchsignup");
const signupuser = require("./newcall/signupuser");

const showallcustomer = require("./newcall/showallcustomer");
const showallstaff = require("./newcall/showallstaff");
const showalltlbymanager = require("./newcall/showalltlbymanager");
const showallmanagerbybranch = require("./newcall/showallmanagerbybranch");

const signupcustomer = require("./newcall/signupcustomer");
const showbyarray = require("./newcall/showbyarray");
const ShowAgentByRoll = require("./CallApi/ShowAgentByRoll");
const logout= require("./CallApi/logout");
var ex = express();
const Form = require("./Schema/Form1");
const Form1 = require("./Schema/Form2");  
const session = require("express-session");

const CookieParser = require("Cookie-Parser");
const filestore = require("session-file-store")(session);
const bodyparser = require("body-parser");
ex.use(CookieParser());
ex.use(session({
  name :'session-id',
  secret : '123456789',
store : new filestore()
}));
var router = express.Router();
router.use(bodyparser.json())
router.route("/")





const login = require("./CallApi/login");
const Save = require("./CallApi/Save");
const jj= require("./CallApi/in");
const Veryfy= require("./CallApi/Veryfy");
const ShowAllCustomer= require("./CallApi/ShowAllCustomer");

const mongo = require("mongoose");
const url ='mongodb://localhost:27017/bank';
const connect = mongo.connect(url,(err,db)=>{
});
connect.then((db)=>
{
    console.log("connected to data base succesfuly");
});

/*

ex.use("/CreateCsv",CsvFile);
ex.use("/Save",Save);
ex.use("/SignUpAgent",SignUpAgent);
ex.use("/ShowAllAgent",ShowAllAgent);
ex.use("/Veryfy",Veryfy);
ex.use("/ShowAllCustomer",ShowAllCustomer);
ex.use("/ShowAgentByRoll",ShowAgentByRoll);
ex.use("/login",login);
ex.use("/logout",logout);

*/
//for new Schema
ex.use("/branchsignup",branchsignup);

ex.use("/signupuser",signupuser);
ex.use("/signupcustomer",signupcustomer);
ex.use("/showbyarray",showbyarray);

ex.use("/showallcustomer",showallcustomer);
ex.use("/showallstaff",showallstaff);
ex.use("/showalltlbymanager",showalltlbymanager);
ex.use("/showallmanagerbybranch",showallmanagerbybranch);



 ex.use((req,res,next)=>
 {
    res.end("this is a default page your program"); 
 });
 var sarver = ex.listen(8001,function()
 {
console.log("your server is connected");

 })

