angular.module('soundGlomerate.map', ['ngMap', 'soundGlomerate.mapFactory', 'soundGlomerate.selectedEventFactory'])

.controller('MapsController', ['$scope', '$location', 'Map', 'SelectedEvent', function ($scope, $location, Map, SelectedEvent) {

    // Set map markers in results view
    var navigation = $location.url();
    $scope.positions;

    // Switch map markers when the view changes
    $scope.$watch('navigation', function(newVal){    
      if(navigation === '/results'){
        $scope.positions = Map.latLongKey
      } else if (navigation === '/selectedEvent') {
        $scope.positions = SelectedEvent.yourEventNav;
      };   
      
    }) 


}]);

