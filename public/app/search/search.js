angular.module('soundGlomerate.search', ['soundGlomerate.searchFactory', 'ui.bootstrap'])

.controller('SearchController', ['$scope', '$state', 'Search', function ($scope, $state, Search) { // naming the controller 'SearchController', requiring the 'Seach' factory and the $scope module. 

  $scope.search.location = {
    oakland: 'Oakland',
    berkeley: 'Berkeley',
    sanFrancisco: "San Francisco"

  };
  $scope.update = function(search){ // makes user input into an object
    if(search === undefined){
      alert("must enter a location");
    } else {
      $scope.search = search; 
    }
  }

  $scope.getEBEvents = function(){ // this function is called when the submit button is clicked
    console.log('message from $scope.getEBEvents in the search controller');
    Search.getEventBriteData($scope.search.location, $scope.search.startDate, $scope.search.endDate)
    $state.go('app.resultsDisplay.results');
  };

}]);