'use strict';

/**
 * @ngdoc overview
 * @name myBathroomApp
 * @description
 * # myBathroomApp
 *
 * Main module of the application.
 */
angular
  .module('myBathroomApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngDialog'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/test', {
        templateUrl: 'views/test.html',
        controller: 'TestCtrl'
      })
      .when('/imprint', {
        templateUrl: 'views/imprint.html',
        controller: 'ImprintCtrl'
      })
      .when('/example', {
        templateUrl: 'views/example.html',
        controller: 'ExampleCtrl'
      })

      .when('/examples', {
        templateUrl: 'views/examples.html',
        controller: 'ExamplesCtrl'
      })
      .when('/selectsize', {
        templateUrl: 'views/selectsize.html',
        controller: 'SelectsizeCtrl'
      })
      .when('/tiling', {
        templateUrl: 'views/tiling.html',
        controller: 'TilingCtrl'
      })
      .when('/toilet', {
        templateUrl: 'views/toilet.html',
        controller: 'ToiletCtrl'
      })
      .when('/washbasin', {
        templateUrl: 'views/washbasin.html',
        controller: 'WashbasinCtrl'
      })
      .when('/sinkfaucets', {
        templateUrl: 'views/sinkfaucets.html',
        controller: 'SinkfaucetsCtrl'
      })
       .when('/shower', {
        templateUrl: 'views/shower.html',
        controller: 'ShowerCtrl'
      })
        .when('/showerenclosure', {
        templateUrl: 'views/showerenclosure.html',
        controller: 'ShowerenclosureCtrl'
      })
        .when('/summary', {
        templateUrl: 'views/summary.html',
        controller: 'SummaryCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

/* Configure DynamoDB access for AWS SDK globally */


// Basic Callback
// var pfunc = function(err, data) {
//     if (err) {
//         console.log(err, err.stack);
//     } else {
//         console.log(data);
//     }
// }
