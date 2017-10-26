var express = require('express');
var procedures = require('../procedures/purchases.proc');
var auth = require('../middleware/auth.mw');

var emailService = require('../services/email.svc');

var router = express.Router();

router.route("/")
.get(function(req, res) {
    procedures.allPrurchases()
    .then(function(posts) {
        res.send(posts);
    })
    .catch(function(err) {
        console.log(err);
        res.sendStatus(500); 
    });
})

.post(function(req, res) {
    emailService.sendEmail('toAddress@test.com', 'fromAddress@test.com', 'Covalence Online Store', 'Your message goes here!')
    .then(function(response) {

    }).catch(function(e) {
        console.log(e);
    });


    var newPost = req.body;
    procedures.addPurchase(newPost.productid, newPost.price, newPost.stripeid)
    .then(function(id) {
        res.status(201).send(id);
    })
    .catch(function(err) {
        console.log(err);
        res.sendStatus(500);
    });
});




module.exports = router;