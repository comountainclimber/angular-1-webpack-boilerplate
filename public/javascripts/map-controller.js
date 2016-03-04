angular.module('freshAir')
  .controller('mapCtrl', ['$scope', '$mdDialog', '$mdMedia', '$http', function($scope, $mdDialog, $mdMedia, $http) {
      
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

    // *-*-*-*-*-*-*-*-*  MAP FORM SUBMISSIONS *-*-*-*-*-*-*-*-*-*-*-*-*-*-

    $scope.submitSteamboatRequestForm = function () {
      var postData = {
        firstname: $scope.user.firstname,
        lastname: $scope.user.lastname,
        email: $scope.user.email,
        phone: $scope.user.phone,
      };

      $http.post('/steamboatrequest', postData);

      $scope.cancel();
    };

    $scope.submitCbRequestForm = function () {
      var postData = {
        firstname: $scope.user.firstname,
        lastname: $scope.user.lastname,
        email: $scope.user.email,
        phone: $scope.user.phone,
      };

      $http.post('/cbrequest', postData);

      $scope.cancel();
    };

}]);
