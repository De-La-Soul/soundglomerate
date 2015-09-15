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