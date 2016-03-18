/*** Main AngularJS Web Application */
var askme = angular.module('askMeApp', ['ngRoute'])

/*** Configure the Routes */
askme.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "build/category.html",
            controller: "couponcatCtrl"
        })
}]);

askme.controller('couponcatCtrl', function($scope, $location, $http) {

    $http.get('json/askme.json').success(function(response) {
        $scope.categoryFilter   =   response.filter.category;
        $scope.colorFilter      =   response.filter.color;
        $scope.sizeFilter       =   response.filter.size;
    });

});
 