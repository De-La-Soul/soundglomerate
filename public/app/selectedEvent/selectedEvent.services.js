angular.module('soundGlomerate.selectedEventFactory', [])

.factory('SelectedEvent', function(){

  var selectedEventService = {
    yourEvent: {},
    yourEventNav: []
  };

  return selectedEventService;
	
})