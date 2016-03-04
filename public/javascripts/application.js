angular.module('freshAir', ['ngRoute', 'ngMaterial', 'ngAnimate', 'ngMessages', 'duScroll']);

angular.module('freshAir')
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider, $rootScope, $document){
    
    $routeProvider
      .when('/', {
        templateUrl : '/views/main.html',
        controller : 'mainCtrl'
      });
      
    $routeProvider
      .when('/memberships', {
        templateUrl : '/views/memberships.html',
        controller : 'mainCtrl'
      });

    $routeProvider
      .when('/contact', {
        templateUrl : '/views/contact.html',
        controller : 'mainCtrl'
      });

    $routeProvider
      .when('/faq', {
        templateUrl : '/views/faq.html',
        controller : 'faqCtrl'
      });

    $routeProvider
      .when('/map', {
        templateUrl : '/views/map.html',
        controller : 'mapCtrl'
      });

    $locationProvider.html5Mode(true);
      
}]);
