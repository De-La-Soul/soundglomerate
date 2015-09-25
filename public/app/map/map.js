angular.module('soundGlomerate.map', ['ngMap', 'soundGlomerate.mapFactory', 'soundGlomerate.selectedEventFactory'])

.controller('MapsController', ['$scope', '$location', '$rootScope', 'Map', 'SelectedEvent',  function ($scope, $location, $rootScope, Map, SelectedEvent) {

  // Sets the position of the markers from the Maps controller. These cordinate come from the initial object return from the api call in Search.factory
  var navigation = $location.url();
  
  $scope.positions = Map.latLongKey;

  console.log('console logging rootScope', $rootScope);

  $scope.$watch('navigation', function(newVal){    
    if (navigation === '/selectedEvent') {
      $scope.positionsCopy = angular.copy(Map.latLongKey);
      $scope.positions = SelectedEvent.yourEventNav;
      console.log('Logging a copy of the position array', $scope.positionsCopy);
      // console.log('This is the SELECTED EVENT view');
    }   

    
  });

  $scope.$watch('navigation', function(newVal){    
    if(navigation === '/results'){
      $scope.positions = $scope.positionsCopy;
      // console.log('This is the RESULTS view');
    }
  });

}]);
          

