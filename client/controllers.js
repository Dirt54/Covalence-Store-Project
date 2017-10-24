angular.module('store.controllers', [])

    .controller('welcomeController', ['$scope', '$location', '$routeParams', 'SEOService', function ($scope, $location, $routeparams,  SEOService) {


    }])

    .controller('apparelController', ['$scope', 'Products', 'Purchases', '$location', '$routeParams',  'SEOService', function ($scope, Products, Purchases, $location, $routeparams,  SEOService) {
        $scope.product = Products.queryByCategory({ categoryid: 1 });
    }])

    .controller('miscController', ['$scope', 'Products', 'Purchases', '$location', '$routeParams',  'SEOService', function ($scope, Products, Purchases, $location, $routeparams, SEOService) {
        $scope.product = Products.queryByCategory({ categoryid: 2 });
    }])

    .controller('checkoutController', ['$scope', 'Products', 'Purchases', '$location', '$routeParams',  'SEOService', function ($scope, Products, Purchases, $location, $routeparams,  SEOService) {

    }])


    .controller('SingleProductController', ['$scope', 'Products', 'Purchases', '$location', '$routeParams', 'SEOService', function ($scope, Products, Purchases, $location, $routeparams,  SEOService) {

    }]);