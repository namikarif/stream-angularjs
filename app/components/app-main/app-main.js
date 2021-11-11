'use strict';

var main = angular.module('myApp.main', []);

main.component('appMain', {
    templateUrl: 'components/app-main/app-main.html',
    controller: 'AppMainCtrl'
});

main.controller('AppMainCtrl', function ($scope, $location) {
});
