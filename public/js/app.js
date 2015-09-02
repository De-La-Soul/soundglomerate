(function(){
'use strict';
var app = angular.module('soundGlomerate', []);

////////////////////////////////////////
//BELOW IS DUMMY DATA TO SET UP TESTING




//ABOVE IS DUMMY DATA TO SET UP TESTING
///////////////////////////////////////

// May not need this later
app.controller('NavBarController', function($scope){
  return $scope.obj = {
    fun: 'not fun'
  };
  
});




app.controller('SearchController', ['$scope', '$http', function($scope, $http) {
  $scope.master = {};
  
  $scope.apiCall = function(location){
    

    $http({
      method: 'GET',
      datatype: 'JSON',
          url: 'https://www.eventbriteapi.com/v3/events/search/?popular=on&sort_by=date&venue.city=' + location + '&venue.region=CA&token= [Enter API Key HERE]'

    }).success(function(data){
       

        $scope.dataAPI = data.events;
        
        

      })
  };

  $scope.update = function(search) {
    $scope.master = angular.copy(search);

    console.log("Genre", search);
    console.log("Location", search.location);
    console.log("This is this", this.search);
  
    this.search = {};

    $scope.apiCall(search.location);

  };



  
}]);

  app.controller('EventBriteDataController', ['$scope', '$http', function($scope, $http){
    $scope.test = 'testing123';
  
    
    
  }]);

  // app.controller('EventFulDataController', ['$scope', '$http', function($scope, $http){
  //   $scope.test = 'testing456';
  //   $http({
  //     url: 'http://api.eventful.com/json/events/search?api_key=&keywords=books&location=San+Diego',
  //     method: 'JSONP',
  //     datatype: 'JSON',      
  //     headers: {"Content-Type": "application/json"}
  //   }).success(function(data){
  //     // $scope.dataAPI = data.events[0].name;
  //     console.log('EVENTFUL :',data);
  //   }).error(function(err){
  //     console.log ('error : ', err);
  //   })

  // }]);


//   var nprUrl = 'http://api.npr.org/query?id=61&fields=relatedLink,title,byline,text,audio,image,pullQuote,all&output=JSON';

//     $scope.test = 'testing123';
// $http({
//     method:'JSONP',
//     url: nprUrl + '&apiKey=MDIwMzUyMDc5MDE0NDEwOTAyNDRkMGY4OQ001&callback=JSON_CALLBACK'}).success(function(data, status){
//       $scope.dataAPI = data.list.story;
//       console.log(data);

//     }).error(function(data, status){

//     });



})();
