angular.module('freshAir')
  .controller('faqCtrl', ['$scope', '$http', '$window', '$mdMedia', '$mdDialog', function($scope, $http, $mdDialog, $mdMedia, $window) {

    // $scope.greeting = "hello world";

//     What is FreshAir?
// Membership
// Schedule and Reservations
// Operations and Inflight Experience



    $scope.showWhatIsFreshAir = true;
    $scope.showMemberships = false;
    $scope.showScheduleAndReservations = false;
    $scope.showOperations = false;

    // $scope.redirectToFaq = function () {
    //   // $window.location.href = '/faq';
    //   console.log("asdasdsad")
    //         $scope.showWhatIsFreshAir = false;
    //   $scope.showMemberships = true;
    //   $scope.showScheduleAndReservations = false;
    //   $scope.showOperations = false;

    //   // $scope.showWhatIsFreshAir = false;
    //   setTimeout($scope.revealMemberships(), 200);
    // }


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

// $scope.displayFormModal = function(ev){
//     var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
//     $mdDialog.show({
//       controller: DialogController,
//       templateUrl: '../views/partials/form.tmpl.html',
//       parent: angular.element(document.body),
//       targetEvent: ev,
//       clickOutsideToClose:true,
//       fullscreen: useFullScreen
//     });
// }


// function DialogController($scope, $mdDialog) {
//   $scope.hide = function() {
//     $mdDialog.hide();
//   };
//   $scope.cancel = function() {
//     $mdDialog.cancel();
//   };
//   $scope.answer = function(answer) {
//     $mdDialog.hide(answer);
//   };
// }



}]);
