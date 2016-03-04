angular.module('freshAir')
  .controller('mapCtrl', ['$scope', '$mdDialog', '$mdMedia', function($scope, $mdDialog, $mdMedia) {
      
    $scope.showCb = function(ev, location) {
      var useFullScreen ;
      if ($mdMedia('xs') === true) {
        useFullScreen = true;
      }
      else {
        useFullScreen = false;
      }
      $mdDialog.show({
        controller: 'mapCtrl',
        templateUrl: '../views/partials/modal/crested-butte.tmpl.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: useFullScreen
      });
    };

    $scope.showSteamboat = function(ev, location) { 
      var useFullScreen;
      if ($mdMedia('xs') === true) {
        useFullScreen = true;
      }
      else {
        useFullScreen = false;
      }
      $mdDialog.show({
        controller: 'mapCtrl',
        templateUrl: '../views/partials/modal/steamboat.tmpl.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: useFullScreen
      });
    };

    $scope.showVail = function(ev, location) {
      var useFullScreen;
      if ($mdMedia('xs') === true) {
        useFullScreen = true;
      }
      else {
        useFullScreen = false;
      }
      $mdDialog.show({
        controller: 'mapCtrl',
        templateUrl: '../views/partials/modal/vail.tmpl.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: useFullScreen
      });
    };

    $scope.showAspen = function(ev, location) {
      var useFullScreen ;
      if ($mdMedia('xs') === true) {
        useFullScreen = true;
      }
      else {
        useFullScreen = false;
      }
      $mdDialog.show({
        controller: 'mapCtrl',
        templateUrl: '../views/partials/modal/aspen.tmpl.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: useFullScreen
      });
    };

    $scope.showTelluride = function(ev, location) {
      var useFullScreen ;
      if ($mdMedia('xs') === true) {
        useFullScreen = true;
      }
      else {
        useFullScreen = false;
      }
      $mdDialog.show({
        controller: 'mapCtrl',
        templateUrl: '../views/partials/modal/telluride.tmpl.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: useFullScreen
      });
    };

    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

}]);
