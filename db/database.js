'use strict()';
var pg = require('pg');
var bodyParser = require('body-parser');
var config = require('./config');

var databaseURL = config.databaseURL;

module.exports = function(app){

  app.use(bodyParser.json());
  app.use(bodyParser.urlenconded({extender:false}));

  app.post('db/events', function(req, res){
    pg.connect(databaseURL, function(err,client, done){
      var query = client.query('INSERT INTO items VALUES ($1, $2)', [user, password]);
      done();
      var rows = [];
      if(err){
        return console.error('error inserting user', err);
      }

      query.on('row', function(row) {
        rows.push(row);
      });
      query.on('end', function(result) {
        client.end();
        console.log('Item has been added');
        return res.json(rows);
      });
    });
  });

};

// var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/';

// var client = new pg.Client(connectionString);
// client.connect();

// var query = client.query('CREATE TABLE testing(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');

// query.on('end', function(){
//   client.end(); // immediately sends a termination message to the postgreSQL server and closes the underlying net.Stream();
// });

