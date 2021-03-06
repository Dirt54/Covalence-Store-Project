var db = require('../config/db');

exports.allPurchases = function() {
    return db.rows('getPurchases');
}

exports.addPurchase = function(productid, price, stripeid) {
    return db.row('insertPurchase', [productid, price, stripeid]);
}

exports.insertPurchase = function(price, stripeid) {
    return db.row('insertPurchases', [price, stripeid]);
}
exports.insertPurchProd = function(productid, purchaseid) {
    return db.empty('insertPurchProd', [productid, purchaseid]);
}