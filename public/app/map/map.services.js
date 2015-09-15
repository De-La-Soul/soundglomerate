angular.module('soundGlomerate.mapFactory', ['soundGlomerate.resultsFactory', 'soundGlomerate.searchFactory'])

.factory('Map', ['Results', 'Search', function(Results, Search){
	
	var testFxn = function(str){
		console.log('SE factory called the map factory :', str)
	}

  return {
    // LatLongKey: Search.LatLong,
    LatLongKey: Search.LatLong,
    testFxn: testFxn
  };
	
}])