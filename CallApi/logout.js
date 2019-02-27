const express = require("express");
var ex = express();
const Form = require("../Schema/Form1");
const session = require("express-session");
const CookieParser = require("Cookie-Parser");
const filestore = require("session-file-store")(session);
const bodyparser = require("body-parser");

var router = express.Router();
router.use(bodyparser.json())
router.route("/")

.get(function(req,res,next)

{
 if(req.session) {
   req.session.destroy();
   res.end("you are logout")
 }
else{
    console.log("plzz enter the correct password");
     res.end("plzz enter the correct password");
} 

})

module.exports=router;