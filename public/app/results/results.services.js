'use strict()';
angular.module('soundGlomerate.resultsFactory', ['soundGlomerate.searchFactory'])

.factory('Results', ['$http', 'Search', function($http, Search){  
  
  var resultsFactory = {};
  resultsFactory.events = Search.events;
  resultsFactory.yourEventNav;
  resultsFactory.selectedCity = Search.selectedCity;

  return resultsFactory;

}]);



