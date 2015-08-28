(function(){ // this wraps the JS in a closure, which is a practice

// this defines the soundGlomerate module
var app = angular.module('soundGlomerate', []);


  // undecided whether to use '$scope' or 'this'
  app.controller('LandingController', function($scope){ // this will be executed then the LandingController is called (from index.html)
    

    // this is copied from the codeschool tutorial and may not be useful. consider removing this later.
    
    /* THIS IS The INITIAL VERSION OF GEMS
    this.product = gem; */
    
    this.products = gems;
    console.log('this ', this);
    console.log('$scope ', $scope);
  });

  app.controller('PanelController', function(){
    // this initialized the tab to 1. This replaces ng-init in the html file
    this.tab = 1;
    // this replaces the "ng-click="tab = 1"" from the index.html, which assigns a or expression to a variable
    this.selectTab = function(setTab){
      this.tab = setTab;
    };
    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    }

  });

    // this is copied from the codeschool tutorial and may not be useful. consider removing this later
    /* THIS IS The INITIAL VERSION OF GEMS
    // var gem = {
    //   name: 'name',
    //   price: 3.44,
    //   description: '...',
    //   canPurchase: false, //a directive, this will not automataically render
    //   soldOut: true
    // };
    */

    var gems = [{
      name: 'dodecahedron',
      price: 3.4,
      description: '...',
      canPurchase: true, //a directive, this will not automataically render
      // soldOut: true
      images: [
          {
            full: 'dummy-image-source1.jpg',
            thumb: 'dummy-image-source1.jpg',
          },
          {
            full: 'dummy-image-source2.jpg',
            thumb: 'dummy-image-source2.jpg',
          }
        ]
      }, 
      {
      name: 'pentagonal gem',
      price: 5,
      description: '...',
      canPurchase: false, //a directive, this will not automataically render
      // soldOut: true
    }];

})();