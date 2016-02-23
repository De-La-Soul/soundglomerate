
angular.module('soundGlomerate.searchFactory', [])

.service('Search', ['$http', function($http){

  var events = []; 
  var latLong =[];
  var selectedCity = '';
  var keys = {};
  
  // Get api token on loading of the app (out of public view) 
  $http.get('/keys', {})
  .success(function(val){
    keys.eventbrite = val.eventbrite;

  });

  // Get data from Eventbrite
  function getEventBriteData(city, startDate, endDate) { 

    angular.copy([], events);
    selectedCity = city;
    
    function fixTime(date) {
      console.log('date', date);
      date = date.substring(0,19);
      date += 'Z';
      return date;
    }  

    if(startDate !== undefined) {
      startDate = fixTime(startDate.toISOString());
    }
    if(endDate !== undefined) {
      endDate = fixTime(endDate.toISOString());
    }

    startDate = startDate ? '&start_date.range_start='+startDate : '';
    endDate = endDate ? '&start_date.range_end='+endDate : '';

    return $http({
      method: 'GET',
      url: 'https://www.eventbriteapi.com/v3/events/search/?sort_by=date&venue.city=' + city + '&venue.region=CA'+startDate+endDate+'&categories=103&expand=venue&token=' + keys.eventbrite
    })
    .then(function(res) {
      res.data.events.forEach(function(evnt) {
        var tuple = [ evnt.venue.address.latitude, evnt.venue.address.longitude];

        latLong.push(tuple);
        events.unshift(evnt);
      });
      return events;
    })
    .catch(function(err) {
      console.log(err);
    });
  };

  function scrappedData() {
    return $http.get('/db/events')
    .success(function (res) {
      res.forEach(function(event) {
        events.unshift(event);
      });
    });
  };

  return {
    events: events,
    getEventBriteData: getEventBriteData,
    scrappedData: scrappedData,
    latLong: latLong,
    selectedCity: selectedCity
  };
}]);

  
