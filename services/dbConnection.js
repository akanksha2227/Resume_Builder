const mysql = require('mysql2');

var connection = mysql.createConnection({
    host:"bmtulitd37comvx1px7f-mysql.services.clever-cloud.com",
    database:"bmtulitd37comvx1px7f",
    user:"urx8j1hmbztqnqm1",
    password:"wL2SEYsFAP7h0N17iw30"
});

connection.connect(function(err){
    if(err){
        console.log(err, "error");
    }
    else{
        console.log("connection successful");
    }
});
module.exports = connection;