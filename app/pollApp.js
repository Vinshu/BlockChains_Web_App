
var app = angular.module("pollApp", ["ngRoute"]);

//config function for making SPA
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/createPollView.html",
        controller  : "createPollController"
    })
    .when("/castVote", {
        templateUrl : "views/castVoteView.html",
        controller  : "castVoteController"
    })
    .otherwise({
       redirectTo: "/"
    }); 

});