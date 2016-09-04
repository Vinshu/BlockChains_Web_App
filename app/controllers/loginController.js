angular.module("loginApp").controller('loginController',function($scope,$http,$location,$compile,$window){


//json object to store the form input details in json form. Values here will be updated by ng-models in the  cretePollView html
$scope.visitor_id=null;
//function to make ajax post request to send the input form json data in poll object to application server
$scope.login=function(){

console.log($scope.visitor_id);
//console.log($scope.choice);//shows choice selected on browser console


$http({ method: "POST", url: "http://localhost:4080/api/login?visitor="+$scope.visitor_id }).success(function(data, status, headers, config) {
        // this callback will be called asynchronously when the response is available
        console.log("Welcome "+$scope.visitor_id);

        //$location.path('http://192.168.1.7:8080/assets/CreatePoll.html#/')
$window.location.href = 'http://192.168.1.7:8080/assets/CreatePoll.html#/';

      }).
      error(function(data, status, headers, config) {
        // called asynchronously if an error occurs when the response is available
        console.log("error");
      });


}



});