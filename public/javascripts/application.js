angular.module('demo', ['ngRoute']);

angular.module('demo')
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    
    $routeProvider
      .when('/', {
        templateUrl : '/views/main.html',
        controller : 'mainCtrl'
      });
      
    $locationProvider.html5Mode(true);
      
}]);
