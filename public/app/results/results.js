'use strict'
angular.module('soundGlomerate.results', ['soundGlomerate.resultsFactory', 'soundGlomerate.selectedEventFactory', 'soundGlomerate.mapFactory', 'ngMap'])

.controller('ResultsController', ['$scope', '$state', '$rootScope','Results', 'SelectedEvent', 'Map', function ($scope, $state, $rootScope, Results, SelectedEvent, Map) {
 
  $scope.apiData = Results.service.events;

  // A click event to list for a click on the div, link, or event
  $scope.selectedEvent = function(event){
    // Stores the selected event for display in the selectedEvent view
    SelectedEvent.yourEvent = event;
   

    // Navigate to the selected event view
    $state.go('app.resultsDisplay.selectedEvent');

    // Logs the event that was clicked on
    console.log('Logging the event that was clicked on', event);
  }

  $scope.positions = [{lat:37.8043637, long:-122.2711137}];
  
  
  setTimeout(function(){
    $scope.positions = Map.markerMapper(Results.service.events);
    console.log($scope.positions)
  }, 2000)

}]);

