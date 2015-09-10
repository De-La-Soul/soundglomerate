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

angular.module('soundGlomerate.mapFactory', [])

.factory('Map', function(){
	

	var markerMapper = function(events){
	var markerPositions = [];
			events.forEach(function(elem){		 
				  var coords = {};
				  coords.lat = elem.venue.address.latitude;
				  coords.long = elem.venue.address.longitude;
				  markerPositions.push(coords);
			})	
		return markerPositions		
	}


	return {
	    	markerMapper: markerMapper,
  	}

	//on hover 
		//marker provides info
		//event lights up or something

	//need an event listener for event hover
		//marker responds either by changing color or jumping up and down


	
})