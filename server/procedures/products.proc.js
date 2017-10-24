var db = require('../config/db');

exports.allProducts = function() {
    return db.rows('getProducts');
}

exports.singleProduct = function(id) {
    return db.row('getSingleProduct', [id]);
}

exports.getProductsByCat = function(categoryid) {
    return db.rows('getProductsByCat', [categoryid]);
}