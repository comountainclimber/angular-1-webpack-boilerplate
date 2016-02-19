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

  angular.module('freshAir')
  .controller('faqCtrl', ['$scope', '$http', function($scope, $http) {

    // $scope.greeting = "hello world";

//     What is FreshAir?
// Membership
// Schedule and Reservations
// Operations and Inflight Experience


    $scope.showWhatIsFreshAir = true;
    $scope.showMemberships = false;
    $scope.showScheduleAndReservations = false;
    $scope.showOperations = false;

    $scope.revealWhatIsFreshAir = function() {
      $scope.showWhatIsFreshAir = true;
      $scope.showMemberships = false;
      $scope.showScheduleAndReservations = false;
      $scope.showOperations = false;
    }

    $scope.revealMemberships = function() {
      $scope.showWhatIsFreshAir = false;
      $scope.showMemberships = true;
      $scope.showScheduleAndReservations = false;
      $scope.showOperations = false;
    }

    $scope.revealScheduleAndReservations = function() {
      $scope.showWhatIsFreshAir = false;
      $scope.showMemberships = false;
      $scope.showScheduleAndReservations = true;
      $scope.showOperations = false;
    }

    $scope.revealOperations = function() {
      $scope.showWhatIsFreshAir = false;
      $scope.showMemberships = false;
      $scope.showScheduleAndReservations = false;
      $scope.showOperations = true;
    }

}]);
