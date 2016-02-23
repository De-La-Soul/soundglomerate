'use strict';

angular.module('soundGlomerate.results', ['soundGlomerate.resultsFactory', 'soundGlomerate.selectedEventFactory', 'soundGlomerate.mapFactory','angular-wurfl-image-tailor', 'angularUtils.directives.dirPagination', 'angularSpinners'])

.controller('ResultsController', ['$scope', '$state', 'Results', 'SelectedEvent','Map', 'spinnerService', function ($scope, $state, Results, SelectedEvent, Map, spinnerService) {

  $scope.pageClass = 'page-results';
  $scope.loading = true;   
  $scope.apiData = Results.events;
  $scope.setCurrentGenre = setCurrentGenre;
  $scope.genresSwap = Results.swap(Results.genres);
  Results.selectedCity = $scope.selectedCity;
  
  // Spinner service 
  $scope.$watch('apiData.length', function(newVal, oldVal){
     $scope.loading = !($scope.loading);
  }); 

  // Navigate to the selectedEvent view
  $scope.selectedEvent = function(event){
    SelectedEvent.yourEvent = event;
    $state.go('app.resultsDisplay.selectedEvent');
    SelectedEvent.yourEventNav = [[event.venue.latitude, event.venue.longitude]];
  };

  // Sets the current genre for the filter
  function setCurrentGenre(genre){
    $scope.currentGenre = $scope.genresSwap[genre];
  }; 

}]);

