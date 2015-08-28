// file created for router&API calls handling
/*jslint node: true */
'use strict';




var express = require('express');
var router = express.Router();
// var url = require('url');
// var async = require('async-series');
var path = require('path');
// var request = require('request');

// eventful API
var eventful = require('eventful-node');
var keys = require(__dirname + '/../config.json');
var client = new eventful.Client(keys.EVENTFUL_KEY);


/*ROUTING*/
module.exports.requestHandler = function(){
		getData();
};

var getData = function(){
	client.searchEvents({keywords:'music'}, function(err, data){
		if(!err){
		console.log(data.search.events);
		} else{
			console.log('erro', err);
		}
	});
};



