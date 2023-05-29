const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const jwtkey = 'key';

const setUserData = require("../services/setUserData");
const isUserExit = require("../services/isUserExit");

router.post('/', function(req, res){
    //console.log("body",req.body);
    var user = req.body;
    console.log("user data",user);
  
    isUserExit(user.email, function(data){
        if(data.length === 0){
            jwt.sign(user, jwtkey, function(err, token){
                if(err) throw err;
                setUserData(user,function(){
                    res.send({msg:"done"});
                    // getUserData(user.email, function(data){
                    //     //res.send({user:{id:data.id, name:data.name, email:data.email}, auth:token});
                    //     res.send({msg:"done"});
                    // });
                });
            });
        }
        else{
            res.send({error:"user already exit"});
        }
    });
});

module.exports = router;