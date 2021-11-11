'use strict';

var appHeader = angular.module('myApp.header', []);

appHeader.component('appHeader', {
    templateUrl: 'components/app-header/app-header.html',
    controller: 'AppHeaderCtrl'
});

appHeader.controller('AppHeaderCtrl', function ($scope, $location, $rootScope) {
    $scope.title = 'Titles';
    $scope.titlePrefix = 'Popular ';

    $scope.routeHome = function () {
        $location.path('/');
    }

    $rootScope.$on("$locationChangeStart", function(event, next, current) {
        var path = next.split('/#!/');
        $scope.title = path[1] ? (path[1].charAt(0).toUpperCase() + path[1].slice(1)) : 'Titles';
    });
});
