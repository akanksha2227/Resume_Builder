const connection = require("./dbConnection");

function isUserExit(email, callback){
    let sql = "select * from user_data where email=?";
    connection.query(sql,[email], function(err, data){
        if(err) throw err;

        callback(data);
    });
}

module.exports = isUserExit;