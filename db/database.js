'use strict()';

require('dotenv').load();
var pg = require('pg'),
    dataScraped = require('./../Data/musicSites.js');

// var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/CristianAvalos';
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/Martial-One',
    key = process.env.EVENTBRITE_KEY;

var client, query, query1, query2, data, queryInsert;




client = new pg.Client(connectionString);
client.connect();

// If the scraped events table exists, drop it before repopulating
query = client.query('DROP TABLE IF EXISTS newEvents');

// Create the table for the scraped events
query1 = client.query('CREATE TABLE newEvents(id SERIAL PRIMARY KEY,data json)');
// query2 = client.query('CREATE TABLE apiKeys(api_name varchar() KEY,data json)');

// populate the table with the data scrapped
data = dataScraped;
data.forEach(function(element, index) {
  queryInsert = client.query('INSERT INTO newEvents(id, data) values($1,$2)', [index, element]);
});

queryInsert.on('end',  function() { client.end(); console.log(key); }); 


////////////////////////// Just for reference below here //////////////////////////////

// feat/name_of_feature
// refactor/
// doc/
// bug/ticket_number 
// test/name_test

// var query = client.query('CREATE TABLE newEvents(id SERIAL ,name VARCHAR(240) not null)');

// var query1 = client.query('CREATE TABLE newEvents(id SERIAL PRIMARY KEY NOT NULL,name VARCHAR(300) NOT NULL, date VARCHAR(100) NOT NULL,cost VARCHAR(200) NOT NULL, venue VARCHAR(200) NOT NULL, description VARCHAR(1000) NULL, city VARCHAR(100) DEFAULT NULL,logo VARCHAR(400) DEFAULT NULL , latitute VARCHAR(100) DEFAULT NULL,longitude VARCHAR(100) DEFAULT NULL, address VARCHAR(200) DEFAULT NULL)');