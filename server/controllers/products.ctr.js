var express = require('express');
var procedures = require('../procedures/products.proc');
var auth = require('../middleware/auth.mw');

var router = express.Router();

router.route("/")
.get(function(req, res) {
    procedures.allProducts()
    .then(function(posts) {
        res.send(posts);
    })
    .catch(function(err) {
        console.log(err);
        res.sendStatus(500); 
    });
})

router.route("/category/:categoryid")
.get(function(req, res) {
    procedures.getProductsByCat(req.params.categoryid)
    .then(function(Post) {
        res.send(Post);
    })
    .catch(function(err) {
        res.sendStatus(500);
    });
})

router.route("/:id")
.get(function(req, res) {
    procedures.singleProduct(req.params.id)
    .then(function(Post) {
        res.send(Post);
    })
    .catch(function(err) {
        res.sendStatus(500);
    });
})

module.exports = router;