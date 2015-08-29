(function(){ // this wraps the JS in a closure, which is a practice

// this defines the soundGlomerate module
var app = angular.module('soundGlomerate', []);


  // undecided whether to use '$scope' or 'this'
  app.controller('StoreController', function($scope){ // this will be executed then the LandingController is called (from index.html)


    // this is copied from the codeschool tutorial and may not be useful. consider removing this later.
    
    /* THIS IS The INITIAL VERSION OF GEMS
    this.product = gem; */
    
    this.products = gems;
    console.log('this ', this);
    console.log('$scope ', $scope);
  });

  // This is removing the inline, tab/navigation bar functionality from the HTML and delegating to the app.js controllers
  app.controller('PanelController', function(){
    // this initialized the tab to 1. This replaces ng-init in the html file
    this.tab = 1;
    // this replaces the "ng-click="tab = 1"" from the index.html, which assigns a or expression to a variable
    this.selectTab = function(setTab){
      this.tab = setTab;
    };

    // This is checking to see if a tab in the nav bar is currently selected
    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    }

  });

  app.controller('ReviewController', function(){
    this.review = {};
    // This pushes the review onto the products' reviews array
    this.addReview = function(product){
      console.log('product ', product);
      product.reviews.push(this.review);
      this.review = {};
    }
  });

    // this is copied from the codeschool tutorial and may not be useful. consider removing this later
    /* THIS IS THE INITIAL VERSION OF GEMS
    // var gem = {
    //   name: 'name',
    //   price: 3.44,
    //   description: '...',
    //   canPurchase: false, //a directive, this will not automataically render
    //   soldOut: true
    // };
    */

 var gems = [{
  name: 'Azurite',
  description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
  shine: 8,
  price: 110.50,
  rarity: 7,
  color: '#CCC',
  faces: 14,
  images: [
    "images/gem-02.gif",
    "images/gem-05.gif",
    "images/gem-09.gif"
  ],
  reviews: [{
    stars: 5,
    body: "I love this gem!",
    author: "joe@example.org"
  }, {
    stars: 1,
    body: "This gem sucks.",
    author: "tim@example.org"
  }]
}, {
  name: 'Bloodstone',
  description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
  shine: 9,
  price: 22.90,
  rarity: 6,
  color: '#EEE',
  faces: 12,
  images: [
    "images/gem-01.gif",
    "images/gem-03.gif",
    "images/gem-04.gif"
  ],
  reviews: [{
    stars: 3,
    body: "I think this gem was just OK, could honestly use more shine, IMO.",
    author: "JimmyDean@example.org"
  }, {
    stars: 4,
    body: "Any gem with 12 faces is for me!",
    author: "gemsRock@example.org"
  }]
  }, {
    name: 'Zircon',
    description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
    shine: 70,
    price: 1100,
    rarity: 2,
    color: '#000',
    faces: 6,
    images: [
      "images/gem-06.gif",
      "images/gem-07.gif",
      "images/gem-08.gif"
    ],
    reviews: [{
      stars: 1,
      body: "This gem is WAY too expensive for its rarity value.",
      author: "turtleguyy@example.org"
    }, {
      stars: 1,
      body: "BBW: High Shine != High Quality.",
      author: "LouisW407@example.org"
    }, {
      stars: 1,
      body: "Don't waste your rubles!",
      author: "nat@example.org"
    }]
}];

  })();