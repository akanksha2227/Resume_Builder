const express = require('express');
const app = express()
const cors = require('cors');
const port = 9999;

app.use(cors());
app.use(express.static("services"));
app.use(express.static("routes"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const connection = require("./services/dbConnection");

app.get('/',(req,res)=>{
    return res.json("backend data");
})

const signupRoute = require("./routes/signupRoute");
const loginRoute = require("./routes/loginRoute");
const paymentRoute = require("./routes/paymentRoute");
const paymentVerificationRoute = require("./routes/paymentVerificationRoute");
const subscriptionRoute = require("./routes/subscriptionRoute");
const subscriptionVerificationRoute = require("./routes/subscriptionVerification");

app.use("/signup", signupRoute);
app.use("/login", loginRoute);
app.use("/payment", paymentRoute);
app.use("/paymentverification", paymentVerificationRoute);
app.use("/paysubscription", subscriptionRoute);
app.use("/paysubscriptionverification", subscriptionVerificationRoute);


app.listen(port,()=>{
    console.log("listening on", port);
})