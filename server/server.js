"use strict";

var express = require('express');
var app = express();

//require and initialize db here



require('./config/middleware.js')(app, express); 


// var router = require('./app/routes.js');


// app.use(express.static(__dirname + '/public'));


// // routes will go here
// app.post('/home', function(req, res){
// 	router.requestHandler('/home', req, res);
// });


// *****************************************
exports = module.exports = app;
