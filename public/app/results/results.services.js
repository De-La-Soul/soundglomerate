'use strict()';
angular.module('soundGlomerate.resultsFactory', ['soundGlomerate.searchFactory', 'soundGlomerate.mapFactory'])

.factory('Results', ['$http', 'Search', 'Map', function($http, Search, Map){  
  
 var service = {
    events: Search.events
 };

  return {
  	service: service,
  }

}]);



