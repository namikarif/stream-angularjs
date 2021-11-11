'use strict';

var home = angular.module('myApp.home', []);

home.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        template: '<app-home></app-home>'
    });
}])

home.component('appHome', {
    templateUrl: 'components/home/home.html',
    controller: 'HomeCtrl'
});

home.controller('HomeCtrl', function ($scope, $location) {
    $scope.menus = [
        {
            title: 'Movies',
            path: '/movies'
        },
        {
            title: 'Series',
            path: '/series'
        }
    ];

    $scope.navigateUrl = function (menuItem) {
        $location.path(menuItem.path);
    };
});
