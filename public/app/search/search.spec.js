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
  var imageData = {"data":[{"username":"madeinnortherncali","profile_picture":"https:\/\/scontent.cdninstagram.com\/t51.2885-19\/10831795_388678967957193_204111904_a.jpg","id":"570091600","full_name":"MiNC"},{"username":"singingbirdee07","profile_picture":"https:\/\/scontent.cdninstagram.com\/t51.2885-19\/10950463_352060958315107_253241323_a.jpg","id":"5008427","full_name":"\u2605gR\u03b1C\u212e \u029duMi P\u03b1Rk\u2606"},{"username":"its.syddles","profile_picture":"https:\/\/scontent.cdninstagram.com\/t51.2885-19\/s150x150\/12547406_1072230459507249_1097977922_a.jpg","id":"287810006","full_name":"Sydney Lipow"},{"username":"eclassss","profile_picture":"https:\/\/scontent.cdninstagram.com\/t51.2885-19\/s150x150\/12407377_946799155409542_1282280619_a.jpg","id":"348497807","full_name":"Erinn Brooks"}]};
  var Search = {};

  beforeEach(angular.mock.module('soundGlomerate.searchFactory'));
  beforeEach(angular.mock.inject(function (_Search_) {
       Search = _Search_;
  }));

  it('should return all the image data ', function() {
    expect(Search.test.search('data')).toEqual(imageData);
  });

  it('should return an query value', function() {    
    expect(Search.test.find('username')).toEqual("madeinnortherncali");
  });
});