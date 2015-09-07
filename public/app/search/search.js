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

angular.module('soundGlomerate.search', ['soundGlomerate.searchFactory'])


.controller('SearchController', ['$scope', 'Search', function ($scope, $stateParams, Search) {
  
  

  $scope.update = function(search){
    if(search === undefined){
      alert("must enter a location");
    } else {
      search = search;
      console.log('search: ', search);
      console.log('search.location: ', search.location);
      console.log('search.startDate: ', search.startDate);
      console.log('search.endDate: ', search.endDate);
    }
  }

  
  
}]);
