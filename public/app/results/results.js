'use strict'
angular.module('soundGlomerate.results', ['soundGlomerate.resultsFactory', 'soundGlomerate.selectedEventFactory', 'soundGlomerate.mapFactory', 'ngMap'])

.controller('ResultsController', ['$scope', '$state', 'Results', 'SelectedEvent','Map', function ($scope, $state, Results, SelectedEvent, Map) {

    $scope.apiData = Results.service.events;

    // var LLfromRes = {}

  // A click event to list for a click on the div, link, or event
    $scope.selectedEvent = function(event){
      // Stores the selected event for display in the selectedEvent view
      SelectedEvent.yourEvent = event;

      // Navigate to the selected event view
      $state.go('app.resultsDisplay.selectedEvent');
      // Logs the event that was clicked on
      console.log('Logging the event that was clicked on', event);

      Map.testFxn(event);

    };

    ////////
    $scope.setPositionsResults = function(){

      console.log('called the $scope.setPositions fxn in the map controller')
    }
    ///////

    $scope.genres = {3001: "Alternative", 3002: "BluesJazz", 3003: "Classical", 3004: "Country", 3005: "Cultural", 3006: "EDMElectronic", 3007: "Folk", 3008: "HipHopRap", 3009: "Indie", 3010: "Latin", 3011: "Metal", 3012: "Opera", 3013: "Pop", 3014: "RB", 3015: "Reggae", 3016: "ReligiousSpiritual", 3017: "Rock", 3018: "Top40", 3999: "Other"};

    function swap(obj){
      var result = {};
      for(var key in obj){
        result[obj[key]] = key;
      }
      return result;
    }

    $scope.genresSwap = swap($scope.genres);


    function setCurrentGenre(genre){
      $scope.currentGenre = $scope.genresSwap[genre];
      console.log($scope.currentGenre);
    }; 

    $scope.setCurrentGenre = setCurrentGenre; 
}]);

