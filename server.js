"use strict";
<<<<<<< HEAD
=======
/*jslint node: true */

>>>>>>> b06443e8324432e72b52baee94454da976cdc014

var path = require('path');
var express = require('express');
var app = express();

var http = require('http');
var https = require('https');

var router = require('./app/routes.js');

<<<<<<< HEAD
var app = express();
var apiRouter = express.Router(); 
=======
>>>>>>> b06443e8324432e72b52baee94454da976cdc014


<<<<<<< HEAD
=======
var port = process.env.PORT || 8080;


>>>>>>> b06443e8324432e72b52baee94454da976cdc014
app.use(express.static(__dirname + '/public'));

app.use('api', apiRouter);

app.listen(port, function(){
	console.log('Listenning to port', port);
});

<<<<<<< HEAD
module.exports = app;
=======
router.requestHandler();

exports = module.exports = app;
>>>>>>> b06443e8324432e72b52baee94454da976cdc014



