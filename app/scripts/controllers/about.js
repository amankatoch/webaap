'use strict';

/**
 * @ngdoc function
 * @name myBathroomApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myBathroomApp
 */
angular.module('myBathroomApp')
  .controller('AboutCtrl', function ($scope,$http,products) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  });
