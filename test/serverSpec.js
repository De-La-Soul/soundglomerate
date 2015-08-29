var request = require('request'); 
var mocha = require('mocha'); 
var chai = require('chai');
var assert = require('assert');
var expect = require('chai').expect; 

var server = require('../server.js'); 

describe('API', function(){
	describe('Endpoints exist', function(){
		it('should respond to GET requests for "/" with a 200 status code', function(done){
			request('http://127.0.0.1:8080/', function(error, response, body){
				expect(response.statusCode).to.equal(200);
				done();
			})
		})
	})
})