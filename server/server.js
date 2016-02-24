"use strict";

var express = require('express'),
    // dotenv = require('dotenv'),
    app = express();

  // dotenv.config({silent:true});





//require and initialize db here

require('./config/middleware.js')(app, express); 

exports = module.exports = app;
