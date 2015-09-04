// file created for router&API calls handling
/*jslint node: true */
'use strict';

var express = require('express');
var router = express.Router();
// var url = require('url');
// var async = require('async-series');
var path = require('path');
var request = require('request');
var async = require('async-series');

// eventful API
var keys = require(__dirname + '/../config.json');

var eventful = require('eventful-node');
var client = new eventful.Client(keys.EVENTFUL_KEY);

// /*ROUTING*/
module.exports.requestHandler = function(route, req, res){
		//getEventfulData();
		getEventBriteData(req,res);

};

// var getEventfulData = function(req,res){
// 	var container = {};
// 	async([
// 		function(done){
// 			client.searchEvents(
// 			{
// 				keywords:'music', 
// 				location:'Berkeley', 
// 				date:'today'
// 			}, 
// 			function(err, data){
// 				if(!err){
// 					container = data.search.events;
// 				} else{
// 					console.log('error', err);
// 				}
// 			});
// 			done();
// 		}],
// 	function(err){
//       if(err){console.log('Following error ocurred : ',err); return};
//         console.log('Finished getting events!', res)
    
//       if(container){
//         res.write(JSON.stringify(container));
//       }else{
//         res.write('') 
//       }
//       res.end();
//     })
// };


var getEventBriteData = function(req, res){


  var url = 'https://www.eventbriteapi.com/v3/events/search/?popular=on&categories=103&sort_by=date&venue.city=San+Francisco&venue.region=CA&token=' + keys["EVENTBRITE_TOKEN"];
  var container = { }

async([
	function(done){
	  request.get(url, function(error, response, body){
		 	container = JSON.parse(body); 
		    console.log(container)
		});
	  	done(false);
	  }, 
	  function(done){
	  	console.log('getting events')
	  	done();
	  }, 
	  function(done){
	  	setTimeout(done, 5000)
	  }], 
	  function(err){
	 	if(err){console.log('Following error ocurred : ',err); return};
	 	console.log('Got EVents!')
	 	res.writeHead(200);
	 	if(container){
	 		console.log("these are the events", container);
	 		res.write(JSON.stringify(container))
	 	} else{
	 		res.write('')
	 	}
	 	res.end()
	  })
}








