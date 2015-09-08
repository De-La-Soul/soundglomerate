'use strict'
angular.module('soundGlomerate.results', ['soundGlomerate.searchFactory'])
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


.controller('ResultsController', ['$scope', 'Search', function ($scope,Search) {
  // console.log(Results.eventbriteResults)
  
  // console.log('Logging Results', Results)
  $scope.apiData = Search.events;
  // console.log(Search)
  
  // $scope.$watch("Search.events", function(newValue, oldValue){
  //     if(Search.events.length > 0){
  //       Search.getData($scope.apiData);
  //       console.log("The watcher is working");
  //     }

  //   // setInterval(Search.getData, 3000 , $scope.apiData);
  // });

    
}]);

