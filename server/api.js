var products = require('./controllers/products.ctr');
var purchases = require('./controllers/purchases.ctr');
var payment = require('./controllers/payment.ctr');
var express = require('express');



var router = express.Router();

router.use('/products', products);
router.use('/purchases', purchases);
router.use('/payment', payment)





module.exports = router;