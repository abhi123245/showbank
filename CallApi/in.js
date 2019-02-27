const express = require("express");
var ex = express();
var fs = require('fs');
const Form = require("../Schema/Form1");

var fs = require('fs');
var parse = require('csv-parse');
var csv = require('fast-csv');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
var router = express.Router();
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
                console.log(csvData,"after reading");
                var incomingData = csvData[0][0];
                console.log(incomingData, "incoming data");
                
                // for (var j = 2; j <= 4; j++) {
                //     ss = csvData[j];
                //     for (var i = 0; i < 6; i++) {
                //         var ab = ss.toString();
                //         var kk = JSON.stringify(ab);
                //         var qq = kk.split(',');
                //         switch(i){
                //             case 0 :
                //             var name=qq[i];
                //             var ab = name.split('"');
                //             var first_name=ab[1];
                //                 console.log( first_name);
                //             break;
                            
                //                case 1 :
                //                 var last_name=qq[i];
                //                 console.log( last_name);
                //             break;

                //             case  2 :
                //              var add=qq[i];
                //                 console.log( add);
                //             break;

                //             case 3 :
                //              var age=qq[i];
                //                 console.log( age);
                //             break;

                //             case 4 :
                //              var agint_id=qq[i];
                //                 console.log( agint_id);
                //             break;


                //             case 5 :
                //               var bname=qq[i];
                //             var abc = bname.split('"');
                //             var branch_name=abc[0];
                //                 console.log( branch_name);
                //             break;

                //         }
                      

                //     }
                
                // Form.create({
                //      First_name: first_name,
                //      Last_name: last_name,
                //      Address: add,
                //      Agent_Id: agint_id,
                //      Branch_Name:  branch_name
                // })}
            }
            )
            
    }

    )

module.exports = router;