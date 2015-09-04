var eventsController = require('./eventsController.js');

module.exports = function(app){

  //define routes that api/events uses 

  app.route('/')
    .get(eventsController.fetchEvents)
}