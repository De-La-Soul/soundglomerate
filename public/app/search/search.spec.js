// describe('Name of the group', function() {
//   var imageData = {"data":[{"username":"madeinnortherncali","profile_picture":"https:\/\/scontent.cdninstagram.com\/t51.2885-19\/10831795_388678967957193_204111904_a.jpg","id":"570091600","full_name":"MiNC"},{"username":"singingbirdee07","profile_picture":"https:\/\/scontent.cdninstagram.com\/t51.2885-19\/10950463_352060958315107_253241323_a.jpg","id":"5008427","full_name":"\u2605gR\u03b1C\u212e \u029duMi P\u03b1Rk\u2606"},{"username":"its.syddles","profile_picture":"https:\/\/scontent.cdninstagram.com\/t51.2885-19\/s150x150\/12547406_1072230459507249_1097977922_a.jpg","id":"287810006","full_name":"Sydney Lipow"},{"username":"eclassss","profile_picture":"https:\/\/scontent.cdninstagram.com\/t51.2885-19\/s150x150\/12407377_946799155409542_1282280619_a.jpg","id":"348497807","full_name":"Erinn Brooks"}]};

//   it('should return image data ', function() {
//     var service = {
//       search: function (query) {
//         return imageData;
//       }
//     };

//     expect(service.search('data')).toEqual(imageData);
//   });
// });

describe('Name of the group', function() {
  var eventBriteData = {"pagination": {"object_count": 1400, "page_number": 1, "page_size": 50, "page_count": 28}}  
  var Search = {};
  var key = "TestingHTTPKeyService";

  beforeEach(module('soundGlomerate.searchFactory'));
  beforeEach(inject(function (_Search_, _$httpBackend_) {
     Search = _Search_;
     $httpBackend = _$httpBackend_;
  }));




  it('should return all the api key ', function() {
    var response;

    $httpBackend
      .when('GET', '/keys')
      .respond(200, key);

    Search.test.getApiKey(key)
          .then(function (data) {
            response = data;
            console.log('test', angular.mock.dump(response));

          })

    $httpBackend.flush();

    expect(response).toEqual(jasmine.any(String));
  });

  it('should return all the image data ', function() {
    var response,
        eventbriteBaseUrl = 'https://www.eventbriteapi.com/v3/events/search/';


    var expectedUrl = function (url) {
      return url.indexOf(eventbriteBaseUrl) !== -1;
    }

    $httpBackend
      .when('GET', expectedUrl)
      .respond(200, eventBriteData.pagination);

    Search.test.search()
          .then(function (data) {
            response = data;
            console.log('test', angular.mock.dump(response));


          })

    $httpBackend.flush();

    expect(response.page_count).toEqual(28);
  });

  it('should return an query value in the ', function() {    
    expect(Search.test.find('pagination')).toEqual(jasmine.any(Object));
  });
});