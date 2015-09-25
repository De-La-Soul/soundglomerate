angular.module('soundGlomerate.selectedEvent', ['soundGlomerate.selectedEventFactory'])

.controller('SelectedEventController', ['$scope', 'SelectedEvent', function ($scope, SelectedEvent) {
	 
   $scope.thisEvent = SelectedEvent.yourEvent;  
   
}]);
