'use strict()';
angular.module('soundGlomerate.resultsFactory', ['soundGlomerate.searchFactory'])

.factory('Results', ['$http', 'Search', function($http, Search){  
  
  var events = Search.events, 
      selectedCity = Search.selectedCity,
      yourEventNav, 
      genres;

  genres = {
    3001: "Alternative", 3002: "BluesJazz", 3003: "Classical", 3004: "Country", 3005: "Cultural", 3006: "EDMElectronic", 3007: "Folk", 3008: "HipHopRap", 3009: "Indie", 3010: "Latin", 3011: "Metal", 3012: "Opera", 3013: "Pop", 3014: "RB", 3015: "Reggae", 3016: "ReligiousSpiritual", 3017: "Rock", 3018: "Top40", 3999: "Other"
  };

  function swap(obj){
    var result = {};
    for (var key in obj) {
      result[obj[key]] = key;
    }
    return result;
  }

  return {
    events: events,
    yourEventNav: yourEventNav,
    selectedCity: selectedCity,
    genres: genres,
    swap: swap
  }

}]);



