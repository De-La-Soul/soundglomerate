// Testing this shit for Heroku
var app = require('./server/server.js');

var port = process.env.PORT || 8000;
// var url = process.env.URL || 'localhost';

app.listen(port);


console.log('Listening on', port);