// file created for router&API calls handling
/*jslint node: true */
'use strict';

var express = require('express');
var router = express.Router();
// var url = require('url');
// var async = require('async-series');
var path = require('path');
var request = require('request');

// eventful API
var eventful = require('eventful-node');
var keys = require(__dirname + '/../config.json');

var app = express();


var eventful = require('eventful-node');
var client = new eventful.Client(keys.EVENTFUL_KEY);

// /*ROUTING*/
module.exports.requestHandler = function(route, req, res){
		getData(req, res);
};



// {
// 		url:'http://eventful.com',
// 		path:'/events/search',
// 		app_key: keys.EVENTFUL_KEY,
// 		dataType:'json',
// 		location:'San Diego',
// 		data:'today',
// 		count_only:'true'

// 	}

// var getData = function(req, res){
// 	request.get('http://eventful.com/json/events/search?appkey=hvJMnwmRwCFF8G7B&q=music&location=San+Fransisco&count_only=true&date=today', function(err, response, body){
// 		if(!err && res.statusCode === 200){
// 			console.log(body);
// 		}
// 	});
// };

// var getData = function(req, res){
	// var url1 = 'https://www.eventbriteapi.com/v3/events/search/?venue.city=Oakland&categories=&token=BJR6WC4U4G4AXYYC3TFM';
	// var url1wo = 'https://www.eventbriteapi.com/v3/events/search/?venue.city=Oakland&categories=';

	// var url2 = 'http://eventful.com/json/events/search/?q=music&location=San+Fransisco&count_only=true&date=today';
	// var url2wo= 'http://eventful.com/json/events/search/?location=San+Fransisco&count_only=true&date=today';

var urlObj = {
	app_key:keys.EVENTFUL_KEY,
	url:'http://eventful.com/json/',
	path:'/events/search',
	location:'Berkeley',
	count_only:'True',
	date:'Today'
};

var getData = function(req,res){
	client.searchEvents({keywords:'music', location:'Berkeley', date:'today'}, function(err, data){
		if(!err){
		console.log(data.search.events);
		} else{
			console.log('erro', err);
		}
	});
};


// 	request
// 	.get(urlObj)
// 	.on('response', function(response){
// 		// console.log(Object.keys(response));
// 		console.log(response);
// 	})
// 	.on('error', function(error){
// 		console.log('error', error);
// 	});
// };



