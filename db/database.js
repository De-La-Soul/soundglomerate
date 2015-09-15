var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/student';

// 'postgres://localhost:5432/student' then this new table is going to be added to the /student user

var client = new pg.Client(connectionString);
client.connect();

// create table where scrapped events are going to be stored. 
var query = client.query('CREATE TABLE newEvents(id SERIAL ,name VARCHAR(240) not null)');

// var testObj = [];
// for(var i=0;i<10;i++){
//   var temp={};
//   temp['name'] = i+"cris";
//   temp['id'] = i;
//   testObj.push(temp);
//   delete temp;
// }

// populate the table with the data scrapped
var dataScrapped = require('./../Data/musicSites.js');
var data = dataScrapped;
// console.log('data',data);

// for(var j=0;j<data.length;j++){
//   client.query('INSERT INTO newEvents(id,name) values($1,$2)',[testObj[j]['id'], testObj[j]['name']]);
// }

for(var j=0;j<data.length;j++){
  client.query('INSERT INTO newEvents(id,name) values($1,$2)',[j,data[j]['name']]);
}
// query.on('end',  function() { client.end(); }); 