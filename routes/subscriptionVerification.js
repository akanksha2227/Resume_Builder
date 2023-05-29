const express = require('express');

const router = express.Router();

const Razorpay = require('razorpay');

var crypto = require("crypto");

const KEY_ID = "rzp_test_htmIRyw58625Sg";

const KEY_SECRET = "UBtIBJBqGrTpVcmY7dNvqONe";

const authorization = require("../middlewares/userAuthorization");
const setSubscriptionDetails = require("../services/setSubscriptionDetails");

//razorpay_order_

router.post("/", authorization, function paymentVerify(req, res) {

    console.log("response", req.body)
    let order = req.body;
    console.log("id", order.user_id);
    let body = req.body.razorpay_order_id + "|" + req.body.razorpay_payment_id;

    var expectedSignature = crypto.createHmac('sha256', KEY_SECRET)

        .update(body.toString())

        .digest('hex');

    if (expectedSignature === req.body.razorpay_signature) { 
        setSubscriptionDetails(order.user_id, function(data){
            res.send({ msg: "subscription successfull" });
        });
    }

    else {

        res.send({ err: "sign invalid" });
    }

});

module.exports = router;