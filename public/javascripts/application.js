angular.module('freshAir', ['ngRoute', 'ngMaterial', 'ngAnimate', 'ngMessages']);

angular.module('freshAir')
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    
    $routeProvider
      .when('/', {
        templateUrl : '/views/main.html',
        controller : 'mainCtrl'
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
      .when('/faq', {
        templateUrl : '/views/faq.html',
        controller : 'faqCtrl'
      });

    $locationProvider.html5Mode(true);
      
  }]);

angular.module('freshAir').run(["$rootScope", "$anchorScroll" , function ($rootScope, $anchorScroll) {
    $rootScope.$on("$locationChangeSuccess", function() {
                $anchorScroll();
    });
}]);