[![Stories in Ready](https://badge.waffle.io/De-La-Soul/De-La-Soul-Thesis.png?label=ready&title=Ready)](https://waffle.io/De-La-Soul/De-La-Soul-Thesis)
#SoundGlomerate#
###A project by the Telegraph Academy Thesis team (TGA[0]), De-La-Soul###

##Team Roles##
- co-project owner: Claire Bendersky
- co-project owner: Moose Abdul-Musawwir
- co-scrum master: Phillip Ventura
- co-scrum master: Cristian Avalos

##Our Vision##

Our goal is to provide a place for music lovers to fincs local music events in their area. Users should be able to find events ranging from large festivals and concerts, to DJ's at local clubs and lounges, to bands at small neigborhood bars and everything below and in between. Our focus here is music. Tell us where you'd like to find events (currently limited to Oakland, Berkeley and San Francisco) and we'll show you events in your area. You can even filter musical genre. We will be adding features soon. 

##Installation##

1. Fork repo
2. From the CLi - `git clone https://github.com/De-La-Soul/De-La-Soul-Thesis.git soundglomerate` 
3. From the soundglomerate dir, install Gulp, globally - `npm install -g gulp`
4. Run Build to install all dependencies - `Gulp build`
5. TEMPORARY FIX!!! - Create a file in the public folder named 'apiKeys.js'
  - `angular.module('soundGlomerate.keysFactory', [])
​
.factory('APIkeys', function(){
  
  var apiKeysFactory = {
    eventBritekey: [YOUR OWN API KEY HERE]
  }
​
  return apiKeysFactory;
})`
6. From the CLi - `gulp start`

