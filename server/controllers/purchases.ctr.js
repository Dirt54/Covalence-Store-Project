var express = require('express');
var procedures = require('../procedures/purchases.proc');
var auth = require('../middleware/auth.mw');

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