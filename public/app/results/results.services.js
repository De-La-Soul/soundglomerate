'use strict()';
angular.module('soundGlomerate.resultsFactory', ['soundGlomerate.searchFactory'])

.factory('Results', ['$http', 'Search', function($http, Search){  
  
  var service = {
    events: Search.events
  };

  return {
  	service: service
  }

}]);



