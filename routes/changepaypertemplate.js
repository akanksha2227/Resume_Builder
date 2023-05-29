const express = require('express');
const router = express.Router();

const setPaypertemplate = require("../services/setPaypertemplate");

router.post('/', function (req, res) {
    //console.log("body",req.body);
    var temp = req.body;
    console.log("user data", temp);
    setPaypertemplate(temp.user_id, function(data){
        res.send({msg:"done"});
    })
});

module.exports = router;