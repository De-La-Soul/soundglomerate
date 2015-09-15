// var app=angular.module('myapp', ['ngMap']);
// app.controller('MarkerRemoveCtrl', function($scope) {  


  angular.module('soundGlomerate.map', ['soundGlomerate.resultsFactory', 'ngMap', 'soundGlomerate.searchFactory', 'soundGlomerate.mapFactory', 'soundGlomerate.results', 'soundGlomerate.selectedEventFactory'])

  .controller('MapsController', ['$scope', 'Search', 'Map', 'Results', 'SelectedEvent', function ($scope, Search, Map, Results, SelectedEvent) {

  ///////
  $scope.setPositionsMap = function(){
    console.log('called the $scope.setPositions fxn in the map controller')
  }
  ///////

  $scope.positions = Search.LatLong;

  $scope.$watch('SelectedEvent.selectedEventService.yourEvent', function(newVal, oldVal){
    if(newVal !== oldVal){
      console.log('THIS IS A TEST console.log $scope.watch(\'Results.selectedEvent\' from the map controller');}
  });

  console.log('SelectedEvent :', SelectedEvent);


}]);
