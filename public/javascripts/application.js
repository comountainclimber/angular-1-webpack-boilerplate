angular.module('freshAir', ['ngRoute', 'ngMaterial', 'ngAnimate', 'ngMessages']);

angular.module('freshAir')
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    
    $routeProvider
      .when('/', {
        templateUrl : '/views/main.html',
        controller : 'mainCtrl'
      });
      
    $routeProvider
      .when('/components', {
        templateUrl : '/views/components.html',
        controller : 'ComponentsCtrl'
      });

    $routeProvider
      .when('/memberships', {
        templateUrl : '/views/memberships.html',
        controller : 'faqCtrl'
      });

    $routeProvider
      .when('/contact', {
        templateUrl : '/views/contact.html',
        controller : 'mainCtrl'
      });

    $routeProvider
      .when('/schedule', {
        templateUrl : '/views/schedule.html',
        controller : 'mainCtrl'
      });

    $routeProvider
      .when('/faq', {
        templateUrl : '/views/faq.html',
        controller : 'faqCtrl'
      });

    $locationProvider.html5Mode(true);
      
  }]);