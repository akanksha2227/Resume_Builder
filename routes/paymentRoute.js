const express = require('express');
const router = express.Router();
const Razorpay= require('razorpay');

const KEY_ID = "rzp_test_htmIRyW58625Sg";
const KEY_SECRET = "UBtIBJBqGrTpVcmY7dNvqONe";

const authorization = require("../middlewares/userAuthorization");

router.post("/",authorization, function (req, res) {

    console.log("order created");
    console.log(req);
    let data = req.body;

    console.log("req data",req.body);
    let instance = new Razorpay({ key_id: KEY_ID, key_secret: KEY_SECRET });
    console.log("instance",instance)
    let options = {

        amount: parseInt(data.amount) * 200,

        currency: "INR",

    };

    instance.orders.create(options, function (err, order) {

        if (err) {

            console.log("err", err)

            res.send({ err: "sevrer error" });
            return;
        }

        console.log("order", order);
        res.send({ msg: "order created", data: order });
        return;
    });
});

module.exports = router;