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
(function(){
'use strict'
angular.module('soundGlomerate.results', [])

.controller('ResultsController', function ($scope, Results) { // Possibly don't need t
  $scope.master = {}; // Will store the data from the returned search and will post to the page

  // Dummy Data ////////////////////////////////////
  $scope.dataAPI = {
    thing1: "This is cool" 


  }
  // $scope.master
});
})()
