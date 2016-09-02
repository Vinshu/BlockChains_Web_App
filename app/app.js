
var app = angular.module("BC_APP", ["ngRoute"]);




app.config(function($routeProvider) {
    $routeProvider
    .when("/newPoll", {
        templateUrl : "views/createPollView.html",
        controller  : "createPollController"
    })
    .otherwise({
       redirectTo: "/newPoll"
    }); 

});