'use strict';

var express = require('express');


var app = express();
var apiRouter = express.Router(); 

var port = process.env.PORT || 4000;

app.use(express.static(__dirname + '/public'));

app.use('api', apiRouter);

app.listen(port, function(){
	console.log('Listenning to port', port);
});

module.exports = app;



