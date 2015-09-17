'use strict()';
angular.module('soundGlomerate.resultsFactory', ['soundGlomerate.searchFactory'])

.factory('Results', ['$http', 'Search', function($http, Search){  
  console.log('events size inside result service', Search.events.length);
  var service = {
    events: Search.events
  };

  return {
  	service: service
  }

}]);



