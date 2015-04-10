'use strict';

/**
 * @ngdoc function
 * @name myBathroomApp.controller:TestCtrl
 * @description
 * # TestCtrl
 * Controller of the myBathroomApp
 */
angular.module('myBathroomApp')
  .controller('SummaryCtrl', function ($scope,products) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    console.log("test controller..")

var res=products.getproducts();
console.log(res);
console.log(products.getproducts())
  });