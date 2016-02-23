
angular.module('soundGlomerate.searchFactory', [])

.service('Search', ['$http', function($http){

  var events = []; 
  var latLong =[];
  var selectedCity = '';
  var keys = {};
  
  var test = {};
  var imageData = {"data":[{"username":"madeinnortherncali","profile_picture":"https:\/\/scontent.cdninstagram.com\/t51.2885-19\/10831795_388678967957193_204111904_a.jpg","id":"570091600","full_name":"MiNC"},{"username":"singingbirdee07","profile_picture":"https:\/\/scontent.cdninstagram.com\/t51.2885-19\/10950463_352060958315107_253241323_a.jpg","id":"5008427","full_name":"\u2605gR\u03b1C\u212e \u029duMi P\u03b1Rk\u2606"},{"username":"its.syddles","profile_picture":"https:\/\/scontent.cdninstagram.com\/t51.2885-19\/s150x150\/12547406_1072230459507249_1097977922_a.jpg","id":"287810006","full_name":"Sydney Lipow"},{"username":"eclassss","profile_picture":"https:\/\/scontent.cdninstagram.com\/t51.2885-19\/s150x150\/12407377_946799155409542_1282280619_a.jpg","id":"348497807","full_name":"Erinn Brooks"}]};

  test.search = function (argument) {
     return imageData
  }

  test.find = function (query) {
     return imageData.data[0][query];
  }


  




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
    selectedCity: selectedCity,
    test: test
  };
}]);

  
