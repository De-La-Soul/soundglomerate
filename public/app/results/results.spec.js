describe('Results Service', function() {
  var Results = {};


  beforeEach(module('soundGlomerate.resultsFactory'));
  beforeEach(inject(function (_Results_, _$httpBackend_) {
     Results = _Results_;
     $httpBackend = _$httpBackend_;
  }));
  
  describe('The genres collection', function() {

    it('should be an object', function() {
      var values = Results.genres;
      expect(values).toEqual(jasmine.any(Object));
    });

    it('should have numbered keys', function() {
      var values = Results.genres;
      var keys = Object.keys(Results.genres);
    
      expect(Number(keys[0])).toEqual(jasmine.any(Number));
      expect(values[keys[3]]).toEqual('Country');
    });

    it('should should have string values ', function() {        
      expect(Results.genres['3014']).toEqual('RB');
    });

    it('should should have string values ', function() {       
      expect(Results.genres['3014']).toEqual('RB');
    });
  });

  describe('The swap function', function() {
      
    it('genres should have numbered keys before swap', function() {
      var numberKeys = Results.genres;
      var stringKeys = Results.swap(numberKeys);      
      
      expect(numberKeys).toEqual(jasmine.any(Object));
      expect(numberKeys['3017']).toEqual('Rock');
      expect(Number(numberKeys['3017'])).toEqual(NaN);        
      expect(Number(stringKeys.Rock)).toEqual(jasmine.any(Number));
    });  

    it('should have string keys after the swap', function() {
      var stringKeys = Results.swap(Results.genres); 
      var keys = Object.keys(stringKeys);
    
      expect(keys[0]).toEqual(jasmine.any(String));
      expect(keys[4]).toEqual('Cultural');
      expect(Number(keys[7])).toEqual(NaN);        
      expect(Number(stringKeys.Rock)).toEqual(jasmine.any(Number));
    });    
    
  });  
});