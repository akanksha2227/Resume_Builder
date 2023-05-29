const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const jwtkey = 'key';


const isUserExit = require("../services/isUserExit");
const getUserData = require("../services/getUserData");

router.post('/', function (req, res) {
    //console.log("body",req.body);
    var user = req.body;
    console.log("user data", user);
    isUserExit(user.email, function (data) {
        if (data.length != 0) {
            jwt.sign(user, jwtkey, function (err, token) {
                if (err) throw err;
                getUserData(user.email, function (data) {
                    res.send({user:{id:data[0].id, name:data[0].name, email:data[0].email, premium:data[0].premium}, auth:token});
                });

            });
        }
        else {
            res.send({ error: "user not exit" });
        }
    });
});

module.exports = router;