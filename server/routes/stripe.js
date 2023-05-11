const router = require("express").Router();
// const dotenv = require("dotenv");
// dotenv.config();
// const stripe = require("stripe")(process.env.STRIPE_KEY);
const stripe = require("stripe")('sk_test_51MuNQkBUUzc6EKBz4GCjB84F0s8oLis8BPfIgQZAbm1uDEefhty2vgXXorVh1vyX5Pan2MpDgfuPfb6aOOvGXkOH00VPYRq3KT');

router.post("/payment", (req, res) => {
    console.log(`token is ${req.body.tokenId}`);
    stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "cad"
    }, (stripeErr, stripeRes) => {
        if (stripeErr) {
            console.log(stripeErr);
            return res.status(500).json(stripeErr);
        } else {
            return res.status(200).json(stripeRes);
        }
    });
})

module.exports = router;