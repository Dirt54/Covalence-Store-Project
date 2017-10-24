var posts = require('./controllers/products.ctr');
var users = require('./controllers/purchases.ctr');
var express = require('express');



var router = express.Router();

router.use('/products', posts);
router.use('/purchases', users);




module.exports = router;