'use strict'
angular.module('soundGlomerate.results', ['soundGlomerate.resultsFactory'])
// goals:
// 2. Search Bar
// - view --
// -- 3 input forms
// -- search button
// -- queried location ($scope.location)
// - controller --
// -- $scope elements for each input 
// ---- $scope.location
// ---- $scope.startDate
// ---- $scope.endDate
// ---- $scope.clickFxn (calls the service Fxn)
// - services --
// ---- HTTP GET
// ------- eventbrite API info (send)
// ------- On success, store and parse data 
// (function(){


.controller('ResultsController', ['$scope', 'Results', function ($scope, Results) {
 
  $scope.apiData = Results.events;

  // A click event to list for a click on the div, link, or event
  $scope.selectedEvent = function(event){
    console.log('Logging the event that was clicked on', event);
  }
  
  // at state event to send navigate to the selected results page

  // Using 'this' to grab the event and send to the results view/controller

    
}]);

