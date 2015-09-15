angular.module('soundGlomerate.map', ['ngMap', 'soundGlomerate.mapFactory'])

.controller('MapsController', ['$scope', 'Map', function ($scope, Map) {

    // Sets the position of the markers from the Maps controller. These cordinate come from the initial object return from the api call in Search.factory
    $scope.positions = Map.LatLongKey;


  }]);
