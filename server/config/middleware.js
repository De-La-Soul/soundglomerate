'use strict';

////////////////////////////////////////////////
/// Middleware installation and router injection
////////////////////////////////////////////////

var bodyParser = require('body-parser');

module.exports = function(app, express){

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../../client'));


var eventbriteRouter = express.Router();

app.use('/api/events', eventbriteRouter); 

app.get('/*', function(req, res) {
    res.redirect('/');
});

require('../events/eventsRoutes.js')(eventbriteRouter);

}


