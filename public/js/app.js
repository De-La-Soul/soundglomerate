// (function(){
var app = angular.module('soundGlomerate', []);

app.controller('NavBarController', function(){
  
})

app.controller('SearchController', ['$scope', function($scope) {
  $scope.master = {};

  $scope.update = function(search) {
    $scope.master = angular.copy(search);
    

    console.log("Genre", search.genre);
    console.log("Location", search.location);
    // console.log(search.genre);
    // console.log(date);
  };

  

  
}]);

// })();