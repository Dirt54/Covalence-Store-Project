var express = require('express');
var stripeSvc = require('../services/stripe.svc');
var procedures = require('../procedures/purchases.proc')
var router = express.Router();

router.post('/', function (req, res) {
    var amount = Number(req.body.amount);
    stripeSvc.charge(req.body.token, amount)
        .then(function(charge) {
            return procedures.insertPurchase(amount, charge.id);            
        })
        .then(function(purchase) {
            // here, req.body.cart is an array of products they are purchasing
            var products = req.body.cart;
            var promises = [];
            for (var i = 0; i < products.length; i++) {
                promises.push(procedures.insertPurchProd(products[i].id, purchase.id));
            }
            return Promise.all(promises);
        })
        .then(function (success) {
            res.sendStatus(204);
        }, function (err) {
            console.log(err);
            res.sendStatus(500);
        })
    });

module.exports = router;

