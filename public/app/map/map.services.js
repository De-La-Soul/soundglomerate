angular.module('soundGlomerate.mapFactory', ['soundGlomerate.searchFactory'])

.factory('Map', ['Search', function(Search){
  
  // sets the LatLong (which will become the markers on the map) after the intial location search (the submit button is hit)
  var LatLongKey = Search.LatLong;

  return {
    LatLongKey: LatLongKey
  };
  
}])
