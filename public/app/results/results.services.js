angular.module('soundGlomerate.resultsFactory', ['soundGlomerate.searchFactory'])
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





.factory('Results', ['$http', 'Search', function($http, Search){   

  console.log(Search.searchData)
   // console.log(Search.apiSearchResults);
  return {
    resultsData: Search.searchData
  }
}]);


// var search = {
//     location: Oakland,
//     fromDate: null,
//     toDate: null
//   };


//   $scope.master = {};
  

//   $scope.apiCall = function(location, genre){
//     if(genre !== undefined){
//       genre = '&subcategories=' + genre;
//     }else{
//       genre='';
//     }

//     $http({
//       method: 'GET',
//       datatype: 'JSON',
//           url: 'https://www.eventbriteapi.com/v3/events/search/?popular=on&sort_by=date&venue.city=' + location + '&venue.region=CA&categories=103'+ genre +
//           '&token='

//         }).success(function(data){
//         $scope.dataAPI = data.events;
//       })
//   };

//   $scope.update = function(search) {
//     $scope.master = angular.copy(search);

//     // console.log("Genre", search.genre.replace(/\W/g, ""));
//     // console.log("Location", search.location);
    
  
//     this.search = {};
//     // console.log(apiGenreId[search.genre.replace(/\W/g, "")]);
//     if(search.genre !== undefined)
//       $scope.apiCall(search.location, apiGenreId[search.genre.replace(/\W/g, "")]);
//     else
//       $scope.apiCall(search.location);
//   };

// $scope.genres = 


// {3001: "Alternative", 3002: "BluesJazz", 3003: "Classical", 3004: "Country", 3005: "Cultural", 3006: "EDMElectronic", 3007: "Folk", 3008: "HipHopRap", 3009: "Indie", 3010: "Latin", 3011: "Metal", 3012: "Opera", 3013: "Pop", 3014: "RB", 3015: "Reggae", 3016: "ReligiousSpiritual", 3017: "Rock", 3018: "Top40", 3999: "Other"}


// var apiGenreId = {
//   'Alternative': "3001", 'BluesJazz': "3002", 'Classical': "3003", 'Country': "3004", 'Cultural': "3005", 'EDMElectronic': "3006", 'Folk': "3007", 'HipHopRap': "3008", 'Indie': "3009", 'Latin': "3010", 'Metal': "3011", 'Opera': "3012", 'Other': "3999", 'Pop': "3013", 'RB': "3014", 'Reggae': "3015",'ReligiousSpiritual': "3016", 'Rock': "3017", 'Top40': "3018"
// } 




/************************************************************************************/