angular.module('store.controllers', [])

    .controller('welcomeController', ['$scope', '$location', '$routeParams', 'SEOService', function ($scope, $location, $routeparams, SEOService) {

        SEOService.setSEO({        
            title: 'Welcome',        
            image: 'http://'+$location.host() +'/images/covalence-store-apparel-10.png',        
            url: $location.url(),        
            description: 'Welcome to the home page!'    
        });
    }])

    .controller('apparelController', ['$scope', 'Products', 'Purchases', '$location', '$routeParams', 'SEOService', function ($scope, Products, Purchases, $location, $routeparams, SEOService) {
        $scope.product = Products.queryByCategory({ categoryid: 1 });

        $scope.singleRead = function (x) {
            $location.path('/product/' + x);
        }

        SEOService.setSEO({        
            title: 'Apparel',        
            image: 'http://'+$location.host() +'/images/covalence-store-apparel-10.png',        
            url: $location.url(),        
            description: 'Shop for some apparel'    
        });
    }])

    .controller('miscController', ['$scope', 'Products', 'Purchases', '$location', '$routeParams', 'SEOService', function ($scope, Products, Purchases, $location, $routeparams, SEOService) {
        $scope.product = Products.queryByCategory({ categoryid: 2 });

        $scope.singleRead = function (x) {
            $location.path('/product/' + x);
        }

        SEOService.setSEO({        
            title: 'Misc',        
            image: 'http://'+$location.host() +'/images/covalence-store-apparel-10.png',        
            url: $location.url(),        
            description: 'Shop for some misc'    
        });
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

            SEOService.setSEO({        
                title: 'Cart',        
                image: 'http://'+$location.host() +'/images/covalence-store-apparel-10.png',        
                url: $location.url(),        
                description: 'Ready to purchase?'    
            });

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
          
       
        SEOService.setSEO({        
            title: 'Product',        
            image: 'http://'+$location.host() +'/images/covalence-store-apparel-10.png',        
            url: $location.url(),        
            description: 'Buy this product?'    
        });
        
    }])

    .controller('checkoutController', ['$scope', 'Products', 'Purchases', 'CreatePayments', '$location', '$routeParams', 'SEOService', 'CheckoutService', function ($scope, Products, Purchases, CreatePayments, $location, $routeParams,  SEOService, CheckoutService) {
        $scope.product = Products.query();
        
        
             
         
             $scope.shoppingCart = CheckoutService.checkoutItems;



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

        $scope.stripeCharge = function() {
            stripe.createToken(card, {
                email: $scope.email,
                name: $scope.name,
                address_line1: $scope.line1,
                address_line2: $scope.line2,
                address_city: $scope.city,
                address_state: $scope.state
            }).then(function(result) {
                if (result.error) {
                    $scope.errorMessage = result.error.message;
                } else {
                    // result.token is the card token (need id property)
                    var shoppingCart = CheckoutService.checkoutItems;

                    var c = new CreatePayments({
                        token: result.token.id,
                        amount: $scope.getTotal(),
                        cart: shoppingCart,
                        email: $scope.email
                    });
                    
                    c.$save(function() {
                        alert('Thank you for the payment, an email has been sent.');
                        $location.path('/');
                    }, function(err) {
                        console.log(err);
                    });
                }
            });
        }

        SEOService.setSEO({        
            title: 'Checkout',        
            image: 'http://'+$location.host() +'/images/covalence-store-apparel-10.png',        
            url: $location.url(),        
            description: 'Purchase this cart'    
        });
        
    }]);