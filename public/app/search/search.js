angular.module('soundGlomerate.search', ['soundGlomerate.searchFactory'])
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



.controller('SearchController', ['$scope', 'Search', '$rootScope', function ($scope, $rootScope, Search) {
  
  

  $rootScope.update = function(search){
    if(search === undefined){
      alert("must enter a location");
    } else {
      
      $rootScope.$broadcast('searchInit');

    }
  // $scope.results = Search.events;

  }

  console.log('rootScopeß', $rootScope)


  
  
}]);
