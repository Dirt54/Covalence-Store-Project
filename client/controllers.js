angular.module('store.controllers', [])

    .controller('welcomeController', ['$scope', '$location', '$routeParams', 'UserService', 'SEOService', function ($scope,  $location, $routeparams, UserService, SEOService) {
       

    }])

    .controller('apparelController', ['$scope', 'Products', 'Purchases',  '$location', '$routeParams', 'UserService', 'SEOService', function ($scope, Products, Purchases, $location, $routeparams, UserService, SEOService) {

    }])

    .controller('miscController', ['$scope', 'Products', 'Purchases',  '$location', '$routeParams', 'UserService', 'SEOService', function ($scope, Products, Purchases, $location, $routeparams, UserService, SEOService) {

    }])

    .controller('checkoutController', ['$scope', 'Products', 'Purchases',  '$location', '$routeParams', 'UserService', 'SEOService', function ($scope, Products, Purchases,  $location, $routeparams, UserService, SEOService) {

    }]);
