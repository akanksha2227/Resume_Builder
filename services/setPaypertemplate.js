const connection = require("./dbConnection");

function setPaypertemplate(id, callback){
    let sql = "update user_data set paypertemplate=? where id=?";
    connection.query(sql,["false", id], function(err, data){
        if(err) throw err;
        console.log(data);
        callback(data);
    });
}

module.exports = setPaypertemplate;