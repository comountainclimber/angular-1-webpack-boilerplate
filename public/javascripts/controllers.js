angular.module('freshAir')
  .controller('mainCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.greeting = "hello world";


    $scope.states = [
    {abbrev: "AK"},
    {abbrev: "NJ"}
    ]

    $scope.showHints = true;


}]);



angular.module('freshAir')
  .controller('ComponentsCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.greeting = "hello world";

}]);
