angular.module('store.factories', [])

    .factory('Products', ['$resource', function ($resource) {
        return $resource('/api/products/:id', { id: '@id' }, {
            queryByCategory: {
                method: 'GET',
                url: '/api/products/category/:categoryid',
                isArray: true
            }
        });
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
