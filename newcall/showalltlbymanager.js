const express = require("express");
var ex = express();
var router = express.Router();
router.route("/")

.get(async (req,res,next)=>
{
   

   
})
.post(async (req,res,next)=>
{
    console.log("this is post request ");
});
module.exports=router;