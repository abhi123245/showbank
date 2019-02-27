const express = require("express");
var ex = express();
var fs = require('fs');
const Form = require("../Schema/Form1");
var fs = require('fs');
var parse = require('csv-parse');
var csv = require('fast-csv');
const SendOtp = require('sendotp');
const sendOtp = new SendOtp('262037Az3gB5PtU5c5e690c');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
var router = express.Router();
var senderid="PRIIND";
router.route('/')
    .get((req, res, next) => {
        var csvData = [];
        var ss = [];
        fs.createReadStream('file.csv')
            .pipe(csv())
            .on('data', function (csvrow) {
                csvData.push(csvrow);
            })
            .on('end', function () {
            
            
                for (var j = 1; j <= 1; j++) {
                    for (var i = 0; i < 9; i++) {

                        switch(i){
                            case 0 :
                            var name=csvData[j][i];
                          console.log( name);
                            break;
                            
                               case 1 :
                                var mobile=csvData[j][i];
                                console.log( mobile);
                            break;

                            case  2 :
                             var email=csvData[j][i];
                                console.log( email);
                            break;

                            case 3 :
                             var address=csvData[j][i];
                                console.log(address );
                            break;

                            case 4 :
                             var dOB=csvData[j][i];
                                console.log( dOB);
                            break;
                         
                            case 5:
                             var aDHAR_NUMBER=csvData[j][i];
                                console.log( aDHAR_NUMBER);
                            break;
                        
                           case 6:
                             var aCCOUNT_TYPE=csvData[j][i];
                                console.log( aCCOUNT_TYPE);
                            break;
                                     
                                   case 7 :
                             var agent_Id=csvData[j][i];
                                console.log(agent_Id);
                            break;
                            
                            case 8 :
                              var branch_Name=csvData[j][i];
                                console.log(branch_Name);
                            break;

                        }
                   var oTP = Math.floor(1000 + Math.random() * 9000);
                   console.log(oTP);

                    }
                
               Form.custdefoult1.create({
                    Name: name,
                     Mobile:  mobile,
                     Email: email,
                     Address: address,
                     DOB :  dOB ,
                     ADHAR_NUMBER: aDHAR_NUMBER,
                     ACCOUNT_TYPE : aCCOUNT_TYPE,
                     Agent_Id : agent_Id,
                     Branch_Name : branch_Name,
                     OTP :oTP
                })
            .then((data)=>
            {
                sendOtp.send(mobile, senderid, oTP, (callback) =>{
  console.log(data);
                });
            })
        
            }
            })
            
    }

    )

module.exports = router;