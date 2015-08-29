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
var eventfulClient = new eventful.Client(keys.EVENTFUL_KEY);


//eventbrite API
var eventbrite = require('eventbrite')({app_key: keys.EVENTBRITE_KEY}); 


/*ROUTING*/
module.exports.requestHandler = function(){
		getEventfulData();
		// getEventBriteData(); 
};

var getEventfulData = function(){
	eventfulClient.searchEvents({keywords:'music'}, function(err, data){
		if(!err){
		console.log(data.search.events);
		} else{
			console.log('error', err);
		}
	});
};

// var getEventBriteData = function(){
// 	var params = {
// 		within: 10,
// 		postal_code: 94602,
// 		max: 10
// 	};

// 	eventbrite.event_search(params, function(error, data){
// 		if(error){
// 			return 'error processing request'
// 		} else {
// 			console.log(data.events);
// 		} 
// 	})
// }





