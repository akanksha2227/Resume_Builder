const connection = require("./dbConnection");

function setUserData(user, callback){
    let sql = "insert into user_data(name, email,password,isverified, premium,paypertemplate) values(?,?,?,?,?,?)";
    connection.query(sql,[user.name, user.email, user.password, "true", "false", "false"], function(err, data){
        if(err) throw err;
        console.log(data);
        callback(data);
    });
}

module.exports = setUserData;