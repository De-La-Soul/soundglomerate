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

})();
