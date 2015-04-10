'use strict';

/**
 * @ngdoc function
 * @name myBathroomApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myBathroomApp
 */
angular.module('myBathroomApp')
  .controller('MainCtrl', function ($scope,$location,$cookies,$cookieStore) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
console.log('test');
var params = {
    TableName : 'Cities'
  }
dynamodb.scan(params, function (err,result,zipcode) {
                    if (err) {
                        console.log(err);
                        return 'Sorry city not supported';
                    } else {
                         console.log(result)
                         
                        

                        // $(result.items).each(function(vare,val){
                        //   console.log(val)
                        // })
                  }
 })

 // $cookies.put('myFavorite', 'oatmeal');

 $scope.load_cities=function(){

var zipcode=$scope.zipcode;
if (! $.isNumeric( zipcode ))
{
  // if city // 
var params1 = {
    TableName : 'Cities',
      "ScanFilter": 
        {
            "city" :
                {
                    "AttributeValueList": [
                        {
                            "S": zipcode,
                           
                        }
                    ],
                    "ComparisonOperator": "EQ"
                }
        },
  }
  var x=dynamodb.scan(params1, function (err, result,zipcode) {
                    if (err) {
                        console.log(err);
                      
                    } else {
                       console.log(result.Items);
                         var i=0;

                         $.each(result.Items, function(key,value){
                       if (i==1)
                          {
                            return false;
                          }
                          console.log(value.id.N);
                          $cookieStore.put('CityId', value.id.N);
                           
                          i++;
                         });
          }
 
 })

 
}
else
{
//end of city // 
// if zip code // 
var params1 = {
    TableName : 'Cities',
      "ScanFilter": 
        {
            "zip" :
                {
                    "AttributeValueList": [
                        {
                            "S": zipcode,
                           
                        }
                    ],
                    "ComparisonOperator": "EQ"
                }
        },
  }
  var x= dynamodb.scan(params1, function (err, result,zipcode) {
                    if (err) {
                        console.log(err);
                  
                    } else {
                         console.log(result.Items);
                         var i=0;

                         $.each(result.Items, function(key,value){
                       if (i==1)
                          {
                            return false;
                          }
                          console.log(value.id.N);
                          $cookieStore.put('CityId', value.id.N);
                           
                         i++;
                     
                         });
                  
                  }
 })
//end // 
}
 
  //var result=get($scope.zipcode);
  
   $location.path("/examples");
  }
  });


// Give credentials and region to AWS SDK
AWS.config.update({accessKeyId: 'AKIAJEEZ4HI7CH7GVYLA', secretAccessKey: '0KKbI8oB5SlP1oKAJM/e/UrauBeOdyOCBCo2op1H'});
AWS.config.region = 'eu-central-1';

// create DynamoDB object and set resource
var dynamodb = new AWS.DynamoDB();

dynamodb.listTables({}, function(err, res) {
  console.log(res);
});

function get(zipcode,$cookieStore){
	var searchres;
}

// dynamodb.describeTable(params, function(err, data) {
//   console.log(data)
// });

