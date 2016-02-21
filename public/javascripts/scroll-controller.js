angular.module('freshAir')
  .controller('scrollCtrl', ['$scope', '$location', '$anchorScroll', function($scope, $location, $anchorScroll) {

    $scope.scrollToHowItWorks = function(){
      $location.hash('howitworks');

      $anchorScroll();
    };

}]);
