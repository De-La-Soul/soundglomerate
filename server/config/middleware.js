'use strict';

////////////////////////////////////////////////
/// Middleware installation and router injection
////////////////////////////////////////////////

var bodyParser = require('body-parser');

module.exports = function(app, express) {
var eventsRouter = express.Router(),
    events = require('../events/eventsRoutes.js');

  app.use('/api/results', eventsRouter)
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(express.static(__dirname + '/../../public'));
  events(eventsRouter);

}


