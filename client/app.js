angular.module('onlinestore', ['ngRoute', 'ngResource', 'store.controllers', 'store.factories', 'onlinestore.services'])
.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
    .when('/', {
        templateUrl: 'views/welcome.html',
        controller: 'welcomeController'
    })
    .when('/apparel', {
        templateUrl: 'views/apparel.html',
        controller: 'apparelController'
    })
    .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'contactController'
    })
    .when('/misc', {
        templateUrl: 'views/misc.html',
        controller: 'miscController'
    })
    .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'cartController'
    })
    .when('/checkout', {
        templateUrl: 'views/checkout.html',
        controller: 'checkoutController'
    })
    .when('/product/:id', {
        templateUrl: 'views/product.html',
        controller: 'SingleProductController'
    })
//   .otherwise({
//         redirectTo: '/'
//     })
}]);
