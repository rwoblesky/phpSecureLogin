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
}]);

//TODO:Move inside app controllers?
$(document).ready(function() {
               $.material.init();
               console.log('Material Initialiazed');
           });
