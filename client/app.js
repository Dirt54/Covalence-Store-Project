angular.module('onlinestore',  ['ngRoute', 'ngResource', 'onlinestore.controllers', 'onlinestore'])
.config(['$routeProvider', function($routeProvider) {
    $routerProvider
    .when('/', {
        templateUrl: 'views/welcome.html'
    })
    .when('/product/:id', {
        templateUrl: 'views/product.html',
        controller: 'SingleProductController'
    })
    .when('/purchase', {
        templateUrl: 'checkout/purchase.html',
        controller: 'CheckoutPurchaseController'
    }
}])