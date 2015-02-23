'use strict';

angular.module('wiyaApp.home', ['ngRoute'])

// Declared route
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl'
    });
}])

// Home controller
.controller('HomeCtrl', ['$scope', function($scope) {
  $(document).ready(function() {
                 $.material.init();
                 console.log('Material Initialiazed');
             });
}]);
