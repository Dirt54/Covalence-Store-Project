var db = require('../config/db');

exports.allPurchases = function() {
    return db.rows('getPurchases');
}

exports.addPurchase = function(productid, price, stripeid) {
    return db.row('insertPurchase', [productid, price, stripeid]);
}