const jwt = require('jsonwebtoken');
const jwtkey = "key";

function userAuthorization(req, res, next) {

    const token = req.headers['authentication'];

    console.log("token.", token);

    if (token) {

        jwt.verify(token, jwtkey, function (err, success) {

            if (err) {

                console.log("fail", err);
                res.send({ err: "authorization failed" });
            }

            else {
                console.log("authorization successfull")

                next();

            }
        })
    }

    else {


        console.log("not found");
        res.send({ err: "please send token" });
    }
}
module.exports = userAuthorization;