'use strict';

/**
 * @ngdoc function
 * @name myBathroomApp.controller:AboutCtrl
 * @description
 * # TilingCtrl
 * Controller of the myBathroomApp
 */
angular.module('myBathroomApp')
  .controller('ShowerenclosureCtrl', function ($scope,$http,$q,$cookies,$cookieStore,$location,$timeout,products,ngDialog) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];



console.log('tiling loaded ..')


 // var params = {
 //    TableName : 'Products'
 //  }
  var params = {
    TableName : 'Products',
      "ScanFilter": 
        {
            "Type" :
                {
                    "AttributeValueList": [
                        {
                            "S": 'Shower enclosure',
                           
                        }
                    ],
                    "ComparisonOperator": "EQ"
                }
        },
  }

var s={};
var x=function (err,result) {
                  if (err) {
                        console.log(err);
                        return 'Sorry city not supported';
                  } else {
                 
                
                  }
                
 }

var dynodb_res=dynamodb.scan(params,x);
var newobj = dynodb_res.response;



var products_cat={};
function unique(list) {
    var result = [];
    $.each(list, function(i, e) {
        if ($.inArray(e, result) == -1) result.push(e);
    });
    return result;
    }
$timeout(function() {
   $.each(newobj.data.Items,function(data,val){
   products_cat[val.Producer.S]=[];
 
})

//unique(products_cat);

var prod_list=[];



$.each(newobj.data.Items,function(data,val){
var temp_obj={};
$.each(products_cat,function(data1,val1){

  if(val.Producer.S==data1)
           {      
             temp_obj= val;
             products_cat[data1].push(temp_obj);

           }
  });

})
 
  $scope.data_tile=products_cat;
   
  $scope.$apply();

},1500);

        $scope.clickToOpen = function (imgurl,producer,price) {
        console.log(imgurl);
        ngDialog.open({
        template: '<img src="'+imgurl+'"></img><span>'+producer+'</span>'+ '<span><h5> Price:'+price+'</h5></span>'+
            '<button type="submit" class="btn btn-primary" data-ng-click="testmodal()">Choose this and next</button>'
           ,
        plain :true,
        scope:$scope,
        });
         /*service function */
        $scope.prod={};
      
       
        $scope.prod.producer=producer;
        $scope.prod.price=price;
        
       
        // var getrest=products.getproducts();
        // console.log(getrest);
        /*end of service function */
    };
    $scope.testmodal=function(){
    
    var setres=products.settoilet($scope.prod);
    console.log(setres);
    $cookieStore.put('Showerenclosure', $scope.prod);
    $(".ngdialog-overlay").click();
    $location.path("/summary");

  }
    
});