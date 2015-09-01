(function(){
'use strict';
var app = angular.module('soundGlomerate', []);

////////////////////////////////////////
//BELOW IS DUMMY DATA TO SET UP TESTING




//ABOVE IS DUMMY DATA TO SET UP TESTING
///////////////////////////////////////






app.controller('NavBarController', function($scope){
  return $scope.obj = {
    fun: 'not fun'
  };
  
});

app.controller('SearchController', ['$scope', function($scope) {
  $scope.master = {};
  // console.log("The datepicker: ", $('.datepicker'));

  // $('.datepicker').pickadate()


  // console.log('$scope', $scope);
  // console.log('this', this);

  $scope.update = function(search) {
    $scope.master = angular.copy(search);
    // 

    console.log("Genre", search);
    console.log("Location", search.location);
    console.log("This is this", this.search);
    // Clear the search forms
    this.search = {};
    // console.log(search.genre);
    // console.log(date);
  };



  
}]);

  app.controller('DataController', ['$scope', '$http', function($scope, $http){
    $scope.test = 'testing123';
    $http({
      method: 'GET',
      datatype: 'JSON',
      // headers: {"Content-Type": "application/javascript"},
      url: 'https://www.eventbriteapi.com/v3/events/search/?popular=on&sort_by=date&venue.city=San+Francisco&venue.region=CA&token='

    }).success(function(data){
      $scope.dataAPI = data.events[0].name;
      console.log($scope.dataAPI);
    })

  }]);

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
