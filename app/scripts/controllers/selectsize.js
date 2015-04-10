'use strict';

/**
 * @ngdoc function
 * @name myBathroomApp.controller:SelectsizeCtrl
 * @description
 * # SelectsizeCtrl
 * Controller of the myBathroomApp
 */
angular.module('myBathroomApp')
  .controller('SelectsizeCtrl', function ($scope,$location,$cookies,$cookieStore) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    console.log("test controller")

    $scope.savesize=function(br){
 
     if(br==undefined)
     {
     	$('.form-group').addClass('has-error');
     }

     else if(isNumber(br.width)==false || isNumber(br.height)==false)
     {
     	$('.form-group').addClass('has-error');

     }
     else
     {
     	$('.form-group').removeClass('has-error');
     	$cookieStore.put('BathroomHeight', br.height);
     	$cookieStore.put('BathroomWidth', br.width);
      
       $location.path("/tiling");
     }
    
  }
 function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
 
  });
