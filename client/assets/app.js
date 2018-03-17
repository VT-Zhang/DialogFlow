var app = angular.module("app", [
    "ngAnimate",
    "ngAria",
    "ngCookies",
    "ngMessages",
    'ngResource',
    'ngSanitize',
    "ngMaterial",
    "ngRoute",
    "ngFlash"
]);

app.config(function ($routeProvider, FlashProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "partials/login.html"
        })
        .when("/registration", {
            templateUrl: "partials/registration.html"
        })
        .when("/main", {
            templateUrl: "partials/main.html"
        })
        .otherwise({
            templateUrl: "partials/login.html"
        });
    FlashProvider.setTimeout(5000);
    FlashProvider.setShowClose(true);
});

