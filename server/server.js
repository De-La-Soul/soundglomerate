"use strict";

var express = require('express');
var app = express();

//require and initialize db here
// database variable
var router = express.Router();
var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/';
//

require('./config/middleware.js')(app, express); 

exports = module.exports = app;
module.exports = router;
