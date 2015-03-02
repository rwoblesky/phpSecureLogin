'use strict';

angular.module('wiyaApp', [
    'ngRoute',
    'wiyaApp.home'           // Newly added home module
]).
config(['$routeProvider', function($routeProvider) {
    // Set defualt view of our app to home

    $routeProvider.otherwise({
        redirectTo: '/home'
    });
}])

.controller('appCtrl', ['$scope', function($scope) {
  $(document).ready(function() {
                 $.material.init();
                 console.log('Material Initialiazed');
             });
}]);
