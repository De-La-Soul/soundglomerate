angular.module('soundGlomerate.search', ['soundGlomerate.searchFactory', 'ui.bootstrap'])



.controller('SearchController', ['$scope', '$state', 'Search', function ($scope, $state, Search) { 

  $scope.cities = ['Oakland', 'Berkeley', 'San Francisco'];
  $scope.selectedCity = '';

  // Get events, navigate to the results view
  $scope.getEvents = function() {
    $scope.selectedCity = $scope.search.location;
    Search.getKeys()
    .then(function(data) {
      Search.getEventBriteData($scope.search.location, $scope.search.startDate, $scope.search.endDate, data.eventbrite);
    });
    
    Search.scrappedData();
    $state.go('app.resultsDisplay.results');
  };

}])

// Wrapper for wurfl (not a fan of this Angular)
.filter('trusted', ['$sce', function($sce) { 
  return function(url) {
    return $sce.trustAsResourceUrl(url);
  };
}]);