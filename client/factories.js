angular.module('store.factories', [])

    .factory('Products', ['$resource', function ($resource) {
        return $resource('/api/products/:id');
    }])


    .factory('Purchases', ['$resource', function ($resource) {
        return $resource('/api/purchases/:id');
    }])

    .factory('CreatePurchases', ['$resource', function ($resource) {
        return $resource('/api/purchases/:id', { id: '@id' }, {
            update: {
                method: 'PUT'
            }
        });
    }]);
