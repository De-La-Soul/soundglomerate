"use strict";
var express = require('express');
var app = express();

require('./config/middleware.js')(app, express); 

exports = module.exports = app;
