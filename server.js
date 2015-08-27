var express = require('express');


var app = express();

var port = process.env.PORT || 4000;

app.use('/node_module', express.static(__dirname + '/node_modules'));

app.use(express.static(__dirname + '/public'));

app.listen(port);

console.log('Listenning to port', port);

exports = module.exports = app;



