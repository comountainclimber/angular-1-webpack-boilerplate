angular.module('freshAir')
  .controller('scrollCtrl', ['$scope', '$location', '$anchorScroll', function($scope, $location, $anchorScroll) {

    // $scope.greeting = "hello world";

    $scope.scrollToHowItWorks = function(){
      $location.hash('howitworks');

      $anchorScroll();
    };

}]);
