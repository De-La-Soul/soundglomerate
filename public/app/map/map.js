angular.module('soundGlomerate.map', ['ngMap', 'soundGlomerate.mapFactory', 'soundGlomerate.selectedEventFactory'])

.controller('MapsController', ['$scope', '$location', 'Map', 'SelectedEvent', function ($scope, $location, Map, SelectedEvent) {

    // Sets the position of the markers from the Maps controller. These cordinate come from the initial object return from the api call in Search.factory
    var navigation = $location.url();
    $scope.positions;


    $scope.$watch('navigation', function(newVal){    
      if(navigation === '/results'){
        $scope.positions = Map.latLongKey
        // console.log('This is the RESULTS view');
      } else if (navigation === '/selectedEvent') {
        $scope.positions = SelectedEvent.yourEventNav;
        // console.log('This is the SELECTED EVENT view');
      };   
      
    }) 


}]);

