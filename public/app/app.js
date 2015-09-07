'use strict';
// this is where routing happens
angular.module('soundGlomerate', [ // declare all controllers and services
  'soundGlomerate.main',
  'soundGlomerate.mainFactory',
  'soundGlomerate.filter',
  'soundGlomerate.filterFactory',
  'soundGlomerate.map',
  'soundGlomerate.mapFactory',
  'soundGlomerate.results',
  'soundGlomerate.resultsFactory',
  'soundGlomerate.search',
  'soundGlomerate.searchFactory',
  'soundGlomerate.selectedEvent',
  'soundGlomerate.selectedEventFactory',
  'ui.router'
])

.config(function($stateProvider, $urlRouterProvider) { // this uses UI router (previously we used ng-router). this is better becuer it uses states, templates and controller and service and if there is a view within the state. THe later is done with the resolve method.
	$stateProvider
    .state('landing', {
      url: '/',
      views: {
        'mainModule':{
          templateUrl: '/app/templates/landingPage.html'
        },
        'main@landing':{
          templateUrl: '/app/main/main.html'
        },
        'search@landing':{
          templateUrl: '/app/search/search.html'
        }
      } 
    })
// This is for testing on the filter MVC
    .state('filter', {
      url:'/filter',
      templateUrl: 'app/filter/filter.html',
      controller: 'FilterController'
    })

    // .state('main',{
    //   templateUrl: 'app/main/main.html'
    // })
    // .state('search',{
    //   templateUrl: 'app/search/search.html'
    // })
    // .state('main.search', {
    //   url:'/',
    //   templateUrl: 'app/search/search.html',
    //   controller: 'SearchController'
    // })
    // .state('results', {
    //   url:'/results', 
    //   views:{
    //     'content1': {templateUrl: 'app/results/results.html'}

    //   }
      // controller: 'ResultsController'
    // })

    $urlRouterProvider.otherwise('/'); // this is the default route (if no route is specified)
})

.run(
    ['$rootScope', '$state', '$stateParams',
      function($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
      }
]);