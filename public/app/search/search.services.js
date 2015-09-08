angular.module('soundGlomerate.searchFactory', [])
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


.factory('Search', ['$http', function($http){ // naming the factory 'Search', requiring the $http module to make API calls
  var events = []; 

  var getEventBriteData = function(city, startDate, endDate){ //defines the getEventBriteData fxn
    angular.copy([], events)

    endDate = endDate || '';
    startDate = startDate || '';

    return $http({ // the direct API call with the user specificed input as the fxn's parameters
      method: 'GET',
      url: 'https://www.eventbriteapi.com/v3/events/search/?popular=on&sort_by=date&venue.city=' + city + '&venue.region=CA&categories=103&token=MD33DX7LJOIGAGCBYRF7'
    })
    .then(function(res){ // this is a promise that waits for the API to return info
        res.data.events.forEach(function(elem){
          //NOTE: need to take into account when fields are null. Right now, it errors out if one of these fields is null.
          var event = {
            name: elem.name.text, 
            description: elem.description.text, 
            time: {
              startTime: elem.start.local,
              endTime: elem.end.local 
            },
            pic: elem.logo.url,
            genre: elem.subcategory_id,
            eventUrl: elem.url             
          }
          events.push(event);
        });
        console.log("these are the events", events)
        return events
      })
  
  };

  return {
    events: events,
    getEventBriteData: getEventBriteData 
  }

}]);
