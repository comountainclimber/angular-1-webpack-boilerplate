angular.module('freshAir')
  .controller('mainCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.hideForm = false;

    $scope.letsGetStarted = function () {
      $scope.showThankYou = true;

       var postData = {
          firstname: $scope.user.firstname,
          lastname: $scope.user.lastname,
          email: $scope.user.email
        };

      $http.post('/homepageform', postData);

      $scope.hideForm = true; 
    };

    $scope.hideContactForm = false;

    $scope.submitQuestionForm = function () {

       var postData = {
          firstname: $scope.user.firstname,
          lastname: $scope.user.lastname,
          email: $scope.user.email,
          phone: $scope.user.phone,
          question: $scope.user.question
        };

        $http.post('/contactpageform', postData);

        $scope.hideContactForm = true;
    };

    $scope.membershipOptions = [
    "Personal","Family", "Business"
    ];

    $scope.hideMemberForm = false;

    $scope.membershipFormSubmission = function () {
      $scope.hideMemberForm = true;

      var postData = {
          firstname: $scope.user.firstname,
          lastname: $scope.user.lastname,
          email: $scope.user.email,
          phone: $scope.user.phone,
          option: $scope.user.membershipoption.option
        };

        $http.post('/membershippageform', postData);
    };

}]);
