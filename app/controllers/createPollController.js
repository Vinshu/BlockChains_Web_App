angular.module("BC_APP").controller('createPollController',function($scope,$http,$location,$compile){

//json object to store the form input details in json form. Values here will be updated by ng-models in the  cretePollView html
$scope.poll={};

//function to make ajax post request to send the input form json data in poll object to application server
$scope.createPoll=function(){


	console.log($scope.poll);

if($scope.poll.title &&$scope.poll.question&&$scope.poll.allowDoubleVoting&&$scope.poll.maxVotes){
$http({ method: "POST", url: "http://localhost:4080/api/createPollEtherium",data: JSON.stringify($scope.poll)}, {headers: {'Content-Type': 'application/json'} }).  success(function(data, status, headers, config) {
        // this callback will be called asynchronously when the response is available
        console.log("data posted");
      }).
      error(function(data, status, headers, config) {
        // called asynchronously if an error occurs when the response is available
        console.log("error");
      });

}

else{
	alert("Fill the poll form completely...");
	console.log("Poll form not filled completely...")
}

}


//function and its associated variables to add input field dynammically  for polling options on button click
$scope.boxName = 0;
$scope.countBox =0;

$scope.addInputField=function(){

var boxName="Option "+$scope.countBox; 
var input=document.createElement('input'); 
var inputSpace=document.createElement('div');     
var parent=document.getElementById('pollOptionsList');
input.setAttribute("ng-model", "poll.options["+$scope.countBox+"]");
input.setAttribute("value",$scope.boxName);
input.setAttribute("style","margin:6px")
input.setAttribute("type", "text");
input.setAttribute("class", "form-control textboxMedium");
input.setAttribute("id", "PollOption"+$scope.countBox);
$compile(input)($scope);
$scope.countBox += 1;
parent.appendChild(inputSpace);
parent.appendChild(input);
}

//function to highlight tabs when using SPA
/*


$scope.go = function ( path ) {
  $location.path( path );
};

*/ 

});