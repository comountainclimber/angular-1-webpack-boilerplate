angular.module('freshAir')
  .controller('mapCtrl', ['$scope', '$mdDialog', '$mdMedia', function($scope, $mdDialog, $mdMedia) {
      
    // $scope.locationClicked = $scope.location
    // console.log($scope.locationClicked)
    // $scope.locationClicked = "Crested Butte"

    $scope.showCb = function(ev, location) {
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
      
        $mdDialog.show({
          // title: 'blumpkin',
          controller: 'mapCtrl',
          templateUrl: '../views/partials/modal/dialog1.tmpl.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose:true,
          fullscreen: useFullScreen
        })
    }

    $scope.showSteamboat = function(ev, location) {
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
      
        $mdDialog.show({
          // title: 'blumpkin',
          controller: 'mapCtrl',
          templateUrl: '../views/partials/modal/dialog2.tmpl.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose:true,
          fullscreen: useFullScreen
        })
    }

    $scope.hide = function() {
      $mdDialog.hide();
    };
    $scope.cancel = function() {
      $mdDialog.cancel();
    };



}]);