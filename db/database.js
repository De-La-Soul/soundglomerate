var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/student';

// 'postgres://localhost:5432/student' then this new table is going to be added to the /student user

var client = new pg.Client(connectionString);
client.connect();

// create table where scrapped events are going to be stored. 
var query = client.query('DROP TABLE IF EXISTS newEvents');
// var query = client.query('CREATE TABLE newEvents(id SERIAL ,name VARCHAR(240) not null)');

var query1 = client.query('CREATE TABLE newEvents(id SERIAL PRIMARY KEY NOT NULL,name VARCHAR(300) NOT NULL DEFAULT NULL, date VARCHAR(20) NOT NULL DEFAULT NULL,cost DOUBLE PRECISION NOT NULL DEFAULT NULL, location VARCHAR(200) NOT NULL DEFAULT NULL, description VARCHAR(300) NULL DEFAULT NULL )');

// populate the table with the data scrapped
var dataScrapped = require('./../Data/musicSites.js');
var data = dataScrapped;
// console.log('data',data);

// for(var j=0;j<data.length;j++){
//   client.query('INSERT INTO newEvents(id,name) values($1,$2)',[testObj[j]['id'], testObj[j]['name']]);
// }

// for(var j=0;j<data.length;j++){
//   client.query('INSERT INTO newEvents(id,name) values($1,$2)',[j,data[j]['name']]);
// }
// query.on('end',  function() { client.end(); }); 