'use strict';

// set which data to fetch
var params = {
  TableName: 'Products'
}

// scan data
dynamodb.scan(params, function (err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});

/**
 * @ngdoc function
 * @name myBathroomApp.service:ExampleSvc
 * @description
 * # ExampleSvc
 * Service of the myBathroomApp
 */
angular.module('myBathroomApp')
  .service('products', function () {
   
     var obj= {
      BathroomWidth:"",
      BathroomHeight:"",
      Tile:{},
      Toilet:{},

     }
    return {
      getproducts: function () {
        return obj;

      },
      settile:function(name){
        obj.Tile=name;
        
        return obj;
      },
      settoilet:function(name){
        obj.Toilet=obj;
        return obj;
      },
    }
  });
