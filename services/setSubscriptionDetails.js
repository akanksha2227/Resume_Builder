const connection = require("./dbConnection");

function setSubscriptionDetails(id, callback){
    let sql = "update user_data set premium=? where id=?";
    connection.query(sql,["true", id], function(err, data){
        if(err) throw err;
        console.log(data);
        callback(data);
    });
}

module.exports = setSubscriptionDetails;