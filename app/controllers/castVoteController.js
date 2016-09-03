angular.module("BC_APP").controller('castVoteController',function($scope,$http,$location,$compile){

//json object to store the form input details in json form. Values here will be updated by ng-models in the  cretePollView html
$scope.activePolls={};
$scope.activePolls.question="What do you think about blockChains?"
$scope.activePolls.option1="It's good"
$scope.activePolls.option2="It's bad"
$scope.activePolls.option3="It's Ok"
$scope.activePolls.option4="I liked centralised DBs more"
$scope.choice=null;//This will save the choice of user
//function to make ajax post request to send the input form json data in poll object to application server
$scope.castVote=function(){


console.log($scope.choice);//shows choice selected on browser console


$http({ method: "POST", url: "http://localhost:4080/api/castVoteEtherium?choice="+$scope.choice }).  success(function(data, status, headers, config) {
        // this callback will be called asynchronously when the response is available
        console.log("vote registered");
      }).
      error(function(data, status, headers, config) {
        // called asynchronously if an error occurs when the response is available
        console.log("error");
      });


}



});