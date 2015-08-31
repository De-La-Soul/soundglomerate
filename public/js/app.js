(function(){
var app = angular.module('soundGlomerate', []);

app.controller('NavBarController', function(){
  
})

app.controller('SearchController', ['$scope', function($scope) {
  $scope.master = {};
  console.log("The datepicker: ", $('.datepicker'));

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