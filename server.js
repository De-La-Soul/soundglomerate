"use strict";
/*jslint node: true */


var express = require('express');
var app = express();

var http = require('http');
var https = require('https');

var router = require('./app/routes.js');


var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

app.listen(port);

console.log('Listenning to port', port);

// routes will go here
app.get('/home', function(req, res){
	router.requestHandler('/home', req, res);
});


// *****************************************
exports = module.exports = app;

