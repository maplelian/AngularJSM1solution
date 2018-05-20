(function(){
    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController)
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope){
    $scope.inputMessage = "";
  
    $scope.itemNumber = function aplitString(){
    var teststr = $scope.inputMessage;
    var arrayOfStrings = $scope.inputMessage.split(",");
    return arrayOfStrings.length;
    
};
    
$scope.validationResult = "";
$scope.fontColor = "white";
$scope.borderColor = "white";
  
$scope.check = function (){
    if ($scope.inputMessage === ""){
        $scope.validationResult = "Please enter data first";
        $scope.fontColor = "red";
        $scope.borderColor = "red";
    } else if ($scope.itemNumber() > 3){
        $scope.validationResult = "Too Much!";
        $scope.fontColor = "green";
        $scope.borderColor = "green";

    }else {
        $scope.validationResult = "Enjoy!";
        $scope.fontColor = "green";
        $scope.borderColor = "green";
    }
};
   
}

})();