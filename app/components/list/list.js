'use strict';
var list = angular.module('myApp.list', ['ngRoute']);

list.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/series', {
        template: `<movies-component type="'series'"></series-component>`,
        controller: 'ListCtrl'
    });
}]);

list.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/movies', {
        template: `<movies-component type="'movie'"></movies-component>`,
        controller: 'ListCtrl'
    });
}]);

list.component('moviesComponent', {
    templateUrl: 'components/list/list.html',
    controller: 'ListCtrl',
    bindings: {
        type: '<'
    }
});

list.controller('ListCtrl', function ($scope, $http) {
    var _this = this;
    $scope.getData = function () {
        if (_this.type) {
            $scope.loading = true;
            var type = _this.type;
            $http({
                method: 'GET',
                url: 'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json',
                headers: {'Content-Type': 'application/json'},
            }).then(function (data, status) {
                var newData = data.data.entries ? data.data.entries : [];
                $scope.dataList = newData.filter(entry => {
                    if (entry.programType !== type) {
                        return false;
                    }
                    return entry.releaseYear >= 2010;
                });
                $scope.dataList = $scope.dataList.sort((a, b) => {
                    if (a.title.toLowerCase() < b.title.toLowerCase()) {
                        return -1;
                    }
                    if (a.title.toLowerCase() > b.title.toLowerCase()) {
                        return 1;
                    }
                    return 0;
                });
                $scope.loading = false;
            }).catch(function (error) {
                $scope.errorMessage = error.data;
                $scope.loading = false;
            });
        }
    };

    setTimeout(() => {
        $scope.getData()
    }, 10);
});
