angular.module('soundGlomerate.selectedEvent', ['soundGlomerate.selectedEventFactory'])
// 6. Selected Event


// - view --
// -- event photo
// -- full description
// -- save event (for later implementation)
// -- transit score (walk score API)
// -- buttons
// ---- buy ticket
// ---- venue
// ---- add to myCal (ties in with the oAuth)
// 

// - controller --
// -- event photo and full description are 
// access from API object from search 
// services (see 2)
// - services --
// -- access walk score API with 
// events venue address info
// -- access stored API object from 
// search service (see 2)


.controller('SelectedEventController', ['$scope', 'SelectedEvent', function ($scope, SelectedEvent) {
	 
   $scope.thisEvent = SelectedEvent.yourEvent;

   console.log('SelectedEvent', SelectedEvent);
   
}]);
