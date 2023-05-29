const connection = require("./dbConnection");

function getUserData(email, callback){
    let sql = "select * from user_data where email=?";
    connection.query(sql,[email], function(err, data){
        if(err) throw err;
        console.log(data);
        callback(data);
    });
}

module.exports = getUserData;