'use strict';

/**
 * @ngdoc function
 * @name myBathroomApp.controller:ExampleCtrl
 * @description
 * # ExampleCtrl
 * Controller of the myBathroomApp
 */
angular.module('myBathroomApp')
  .controller('ExampleCtrl', function ($scope,$cookies,$cookieStore) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
 $cookieStore.put('myFavorite', 'oatmeal');
      
});
