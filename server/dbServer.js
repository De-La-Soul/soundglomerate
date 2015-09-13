/*
  Description: This file is used to create routing for the database.

  */

var express = require('express');
// ******************************************************************************* // 
//require and initialize db here
// database variable
var router = express.Router();
var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/';
// ******************************************************************************* // 

router.post('/db/events', function(req, res){
  var results = [];
  console.log('on here');

  // grab data from http request
  var data = {
    text:req.body.text,
    complete:false
  }

  // Get a Postgres client from the connection pool
  pg.connect(connectionString, function(err, client, done) {

    // SQL Query > Insert Data
    client.query("INSERT INTO items(text, complete) values($1, $2)", [data.text, data.complete]);

    // SQL Query > Select Data
    var query = client.query("SELECT * FROM items ORDER BY id ASC");

    // Stream results back one row at a time
    query.on('row', function(row) {
      results.push(row);
    });

    // After all data is returned, close connection and return results
    query.on('end', function() {
      client.end();
      return res.json(results);
    });

    // Handle Errors
    if(err) {
      console.log(err);
    }

  });
});

exports = module.exports = router;