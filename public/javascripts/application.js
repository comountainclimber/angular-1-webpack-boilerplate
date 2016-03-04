angular.module('freshAir', ['ngRoute', 'ngMaterial', 'ngAnimate', 'ngMessages', 'duScroll']);

angular.module('freshAir')
  .config(['$routeProvider', '$locationProvider', '$rootScope', '$document', function($routeProvider, $locationProvider, $rootScope, $document){
    
    // $rootScope.$on('$stateChangeSuccess', function() {
    //   $document[0].body.scrollTop = $document[0].documentElement.scrollTop = 0;
    // });

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

// angular.module('freshAir')
//   .controller(["$rootScope", "$anchorScroll" , function ($rootScope, $anchorScroll) {
//   $rootScope.$on('$stateChangeSuccess', function() {
//      document.body.scrollTop = document.documentElement.scrollTop = 0;
//   });
// }]);