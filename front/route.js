var app = angular.module("myApp", ["ngRoute"]);

app.config(['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) => {
    $routeProvider
        .when("/", {
            templateUrl: "src/app/components/user.html",
            controller: 'mainCtrl',
            controllerAs: 'main'
        })
    $locationProvider.html5Mode(true);

}]);