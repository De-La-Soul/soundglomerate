describe('SearchController', function() {

    var $scope, $controller;

    beforeEach(module('soundGlomerate'));

    beforeEach(inject(function(_$rootScope_, _$controller_){
        $rootScope = _$rootScope_;
        $scope = $scope = $rootScope.$new();        
        $controller = _$controller_;

        $controller('SearchController', {'$scope': $scope});
    }));



    it('should make about menu item active.', function() {
        expect($scope.master).toEqual({});
    });

    
});