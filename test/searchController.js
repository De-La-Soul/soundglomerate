// describe('NavCtrl', function() {
//     var scope, $location, createController;

//     beforeEach(inject(function ($rootScope, $controller _$location_) {
//         $location = _$location_;
//         scope = $rootScope.$new();

//         createController = function() {
//             return $controller('NavCtrl', {
//                 '$scope': scope
//             });
//         };
//     }));

//     it('should have a method to check if the path is active', function() {
//         var controller = createController();
//         $location.path('/about');
//         expect($location.path()).toBe('/about');
//         expect(scope.isActive('/about')).toBe(true);
//         expect(scope.isActive('/contact')).toBe(false);
//     });
// });

// 'use strict';
// describe('NavBarController', function() {

//     var $scope, $controller;

//     beforeEach(module('soundGlomerate'));

//     beforeEach(inject(function(_$scope_, _$controller_){
//         $scope = _$scope_;
//         $controller = _$controller_;

//         $controller('NavBarController', {'$scope': $scope});
//     }));



//     it('should make about menu item active.', function() {
//         expect($scope.obj.fun).toEqual('not fun');
//     });

    
// });

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