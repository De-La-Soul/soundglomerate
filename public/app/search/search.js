angular.module('soundGlomerate.search', ['soundGlomerate.searchFactory'])

.controller('SearchController', ['$scope', '$state', 'Search', function ($scope, $state, Search) { // naming the controller 'SearchController', requiring the 'Seach' factory and the $scope module. 

  $scope.update = function(search){ // makes user input into an object
    if(search === undefined){
      alert("must enter a location");
    } else {
      $scope.search = search; 
    }
  
  }

  $scope.getEBEvents = function(){ // this function is called when the submit button is clicked

// selectedEventMapMarker
    Search.getEventBriteData($scope.search.location, $scope.search.startDate, $scope.search.endDate)
    $state.go('app.resultsDisplay.results');
  };

  
}]);