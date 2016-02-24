dotenv = require('dotenv').load();
var app = require('./server/server.js'),
    bodyParser = require('body-parser'),
    pg = require('pg');

// DB connection string
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/Martial-One';
    // connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/CristianAvalos';

var port = process.env.PORT || 8100,
    key = process.env.EVENTBRITE_KEY || 'No key found',
    test,
    results = [],
    results2 = [];

    
    app.listen(port);
    console.log('Listening on', port);
    // console.log(test);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); 

// Will be used when alowing users to pist events
app.post('/db/events', function(req, res){
  pg.connect(connectionString, function(err, client, done){
    // Post events
    // client.query('INSERT INTO events(id,name) values($1,$2)', [1,'cris Testing']);
  });
});

app.get('/db/events', function(req, res){
  pg.connect(connectionString,function(err, client, done){
    var query = client.query("SELECT data FROM newEvents;");
    
    // Start query to a db row
    query.on('row', function(row){
      results.push(row.data);
    });

    // Do this when the query ends
    query.on('end', function(){
      client.end();
      return res.json(results);
    }); 

    // Handle Errors
    if(err){
      console.log(err);
    }
  });
});
// SELECT api_key FROM keys2 WHERE api_name = \'EVENTBRITE\';
app.get('/db/apikeys', function(req, res){
  pg.connect(connectionString,function(err, client, done){
    var query = client.query('SELECT * FROM keys');
    
    // Start query to a db row
    query.on('row', function(row){
      test = row.data;
    });

    // Do this when the query ends
    query.on('end', function(){
      // console.log(res.json(data))
      client.end();
      return res.json(test);
    }); 

    // Handle Errors
    if(err){
      console.log(err);
    }
  });
});

