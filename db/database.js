var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/student';

// 'postgres://localhost:5432/student' then this new table is going to be added to the /student user

var client = new pg.Client(connectionString);
client.connect();
var query = client.query('CREATE TABLE events(id SERIAL PRIMARY KEY,name VARCHAR(40) not null)');
query.on('end', function() { client.end(); });