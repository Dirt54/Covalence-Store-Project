angular.module('onlinestore',  ['ngRoute', 'ngResource', 'onlinestore.controllers', 'onlinestore'])
.config(['$routeProvider', function($routeProvider) {
    $routerProvider
    .when('/', {
        templateUrl: 'views/welcome.html'
    })
    .when('/')
}])