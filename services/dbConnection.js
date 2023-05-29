const mysql = require('mysql2');

var connection = mysql.createConnection({
    host:"localhost",
    database:"meta_resume",
    user:"root",
    password:"@kku12345"
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