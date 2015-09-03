// file created for router&API calls handling
/*jslint node: true */
'use strict';

// var express = require('express');
// var router = express.Router();
// var url = require('url');
// var async = require('async-series');
// var path = require('path');
// var request = require('request');


/* added */



// eventful API
var keys = require(__dirname + '/../config.json');

var eventful = require('eventful-node');
var client = new eventful.Client(keys.EVENTFUL_KEY);

// /*ROUTING*/

module.exports.requestHandler = function(route, req, res){
		getEventfulData(req, res);
		getEventBriteData();
};

var getEventfulData = function(){
	client.searchEvents({keywords:'music', location:'Berkeley', date:'today'}, function(err, data){
		if(!err){
		console.log("EVENTFUL DATA!!!!!!!!!!", data.search.events);
		} else{
			console.log('error', err);
		}
	});
};


var getEventBriteData = function(){
  var url = 'https://www.eventbriteapi.com/v3/events/search/?popular=on&sort_by=date&venue.city=San+Francisco&venue.region=CA&token=' + keys["EVENTBRITE_TOKEN"];

  return request(url, function(error, response, body){
    if(!error & response.statusCode === 200){
      console.log("EVENTBRITEEEEEE!!!!!!!!!!:", JSON.parse(body));
    }
  });

};








