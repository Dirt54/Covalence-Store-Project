angular.module('store.controllers', [])

    .controller('welcomeController', ['$scope', '$location', '$routeParams', 'SEOService', function ($scope, $location, $routeparams, SEOService) {


    }])

    .controller('apparelController', ['$scope', 'Products', 'Purchases', '$location', '$routeParams', 'SEOService', function ($scope, Products, Purchases, $location, $routeparams, SEOService) {
        $scope.product = Products.queryByCategory({ categoryid: 1 });

        $scope.singleRead = function (x) {
            $location.path('/product/' + x);
        }
    }])

    .controller('miscController', ['$scope', 'Products', 'Purchases', '$location', '$routeParams', 'SEOService', function ($scope, Products, Purchases, $location, $routeparams, SEOService) {
        $scope.product = Products.queryByCategory({ categoryid: 2 });

        $scope.singleRead = function (x) {
            $location.path('/product/' + x);
        }
    }])

    .controller('cartController', ['$scope', 'Products', 'Purchases', '$location', '$routeParams', 'SEOService', 'CheckoutService', function ($scope, Products, Purchases, $location, $routeparams, SEOService, CheckoutService) {
        $scope.product = Products.query();



        $scope.shoppingCart = CheckoutService.checkoutItems;

        $scope.deleteItem = function (array, element) {
            if (confirm('Are you sure you want to delete this item?')) {
                const index = array.indexOf(element);
                array.splice(index, 1);

            }
        }

        $scope.getTotal = function () {
            var total = 0;
            for (var i = 0; i < $scope.shoppingCart.length; i++) {
                var prod = $scope.shoppingCart[i];
                total += (prod.price);
            }
            return total;
        }

        $scope.gotocheckbtn = function () {
            $location.path('/checkout');
        }


    }])


    .controller('SingleProductController', ['$scope', 'Products', 'Purchases', '$location', '$routeParams', 'SEOService', 'CheckoutService', function ($scope, Products, Purchases, $location, $routeParams, SEOService, CheckoutService) {
        $scope.product = Products.get({ id: $routeParams.id });

        $scope.addToCart = function (id, imageurl, title, price) {
            var payload = {
                id: id,
                imageurl: imageurl,
                title: title,
                price: price
            }

            CheckoutService.checkoutItems.push(payload);
            console.log(CheckoutService.checkoutItems);
        }




    }])

    .controller('contactController', ['$scope', 'EmailService', '$location', '$routeParams', 'SEOService', function ($scope, EmailService, $location, $routeparams, SEOService) {
        $scope.sendContactEmail = function () {
            console.log($scope.name);
            console.log($scope.email);
            console.log($scope.message);
            EmailService.sendEmail('covalencestore123@gmail.com', $scope.email, 'Contact Email Request', $scope.message);
        }


    }])

    .controller('checkoutController', ['$scope', 'Products', 'Purchases', '$location', '$routeParams', 'SEOService', 'CheckoutService', function ($scope, Products, Purchases, $location, $routeParams, SEOService, CheckoutService) {
        $scope.product = Products.query();



        $scope.shoppingCart = CheckoutService.checkoutItems;


        $scope.getTotal = function () {
            var total = 0;
            for (var i = 0; i < $scope.shoppingCart.length; i++) {
                var prod = $scope.shoppingCart[i];
                total += (prod.price);
            }
            return total;
        }



        var elements = stripe.elements();
        var card = elements.create('card');
        card.mount('#card-field');

        $scope.errorMessage = '';


    }]);