'use strict';

var appFooter = angular.module('myApp.footer', []);

appFooter.component('appFooter', {
    templateUrl: 'components/app-footer/app-footer.html',
    controller: 'AppFooterCtrl'
});

appFooter.controller('AppFooterCtrl', function ($scope, $location) {
    $scope.menuList = [
        {
            title: 'Home',
            path: ''
        },
        {
            title: 'Terms and Conditions',
            path: ''
        },
        {
            title: 'Privacy Policy',
            path: ''
        },
        {
            title: 'Collection Statement',
            path: ''
        },
        {
            title: 'Help',
            path: ''
        },
        {
            title: 'Manage Account',
            path: ''
        }
    ]
});
