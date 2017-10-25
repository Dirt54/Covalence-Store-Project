angular.module('store.controllers', [])

    .controller('welcomeController', ['$scope', '$location', '$routeParams', 'SEOService', function ($scope, $location, $routeparams,  SEOService) {


    }])

    .controller('apparelController', ['$scope', 'Products', 'Purchases', '$location', '$routeParams',  'SEOService', function ($scope, Products, Purchases, $location, $routeparams,  SEOService) {
        $scope.product = Products.queryByCategory({ categoryid: 1 });

        $scope.singleRead = function (x) {
            $location.path('/product/' + x);
        }
    }])

    .controller('miscController', ['$scope', 'Products', 'Purchases', '$location', '$routeParams',  'SEOService', function ($scope, Products, Purchases, $location, $routeparams, SEOService) {
        $scope.product = Products.queryByCategory({ categoryid: 2 });

        $scope.singleRead = function (x) {
            $location.path('/product/' + x);
        }
    }])

    .controller('checkoutController', ['$scope', 'Products', 'Purchases', '$location', '$routeParams',  'SEOService', 'CheckoutService', function ($scope, Products, Purchases, $location, $routeparams,  SEOService, CheckoutService) {
        $scope.product = Products.query();
        
        
            $scope.shoppingCart = CheckoutService.checkoutItems;

            $scope.deleteItem = function(array, element) {
                if (confirm('Are you sure you want to delete this item?')) {
                      const index = array.indexOf(element);
                    array.splice(index, 1);
                  
                }
            }
        

    }])


    .controller('SingleProductController', ['$scope', 'Products', 'Purchases', '$location', '$routeParams', 'SEOService', 'CheckoutService', function ($scope, Products, Purchases, $location, $routeParams,  SEOService, CheckoutService) {
        $scope.product = Products.get({ id: $routeParams.id });

        $scope.addToCart = function(id, imageurl, title, price) {
            var payload = {
                id: id,
                imageurl: imageurl,
                title: title,
                price:  price
            }

            CheckoutService.checkoutItems.push(payload);
             console.log(CheckoutService.checkoutItems);
        }
          
       

        
    }]);