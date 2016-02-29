angular.module('freshAir')
  .controller('faqCtrl', ['$scope', '$http', '$window', '$mdMedia', '$mdDialog', function($scope, $http, $mdDialog, $mdMedia, $window) {

    // console.log("welcome to the FAQ")

    $scope.showWhatIsFreshAir = true;
    $scope.showMemberships = false;
    $scope.showScheduleAndReservations = false;
    $scope.showOperations = false;

    $scope.revealWhatIsFreshAir = function() {
      $scope.showWhatIsFreshAir = true;
      $scope.showMemberships = false;
      $scope.showScheduleAndReservations = false;
      $scope.showOperations = false;
    };

    $scope.revealMemberships = function() {
      $scope.showWhatIsFreshAir = false;
      $scope.showMemberships = true;
      $scope.showScheduleAndReservations = false;
      $scope.showOperations = false;
    };

    $scope.revealScheduleAndReservations = function() {
      $scope.showWhatIsFreshAir = false;
      $scope.showMemberships = false;
      $scope.showScheduleAndReservations = true;
      $scope.showOperations = false;
    };

    $scope.revealOperations = function() {
      $scope.showWhatIsFreshAir = false;
      $scope.showMemberships = false;
      $scope.showScheduleAndReservations = false;
      $scope.showOperations = true;
    };

}]);
