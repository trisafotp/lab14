var app = angular.module('catDog');

app.config(function($routeProvider) {
    $routeProvider
      .when('/cat', {
        controller:'catCtrl',
        templateUrl:'cat.html'
      })
      .when('/dog', {
        controller: 'dogCtrl',
        templateUrl: 'dog.html'
      })
      .when('/porcupine', {
        controller: 'porcupineCtrl',
        templateUrl: 'porcupine.html'
      })
      .when('/pig', {
        controller: 'pigCtrl',
        templateUrl: 'pig.html'
      })
      .otherwise({redirectTo: '/cat'
    })
});
