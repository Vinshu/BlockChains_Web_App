angular.module("BC_APP").controller('createPollController',function($scope){

//json object to store the form input details in json form. Values here will be updated by ng-models in the  cretePollView html
$scope.poll={};

//function to make ajax post request to send the input form json data in poll object to application server
$scope.createPoll=function(){
$http({ method: "POST", url: "http://192.168.0.136:4080/api/createPollEtherium", data: $scope.poll , cache: false });
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
 

});