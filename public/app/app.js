'use strict';
// this is where routing happens
angular.module('soundGlomerate', [ // declare all controllers and services
  'soundGlomerate.main',
  'soundGlomerate.mainServices',
  'soundGlomerate.eventbrite',
  'soundGlomerate.eventbriteServices',
  'ui.router'
])

.config(function($stateProvider, $urlRouterProvider) { // this uses UI router (previously we used ng-router). this is better becuer it uses states, templates and controller and service and if there is a view within the state. THe later is done with the resolve method.
	$stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController'
    })
    .state('events', {
      templateUrl: 'app/events/eventbrite.html',
      controller: 'EventbriteController'
    })
    $urlRouterProvider.otherwise('/'); // this is the default route (if no route is specified)
})