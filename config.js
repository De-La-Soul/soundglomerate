module.exports = {


    /* Change the database name to your local machine's name*/
    databaseURL: process.env.DATABASE_URL || 'postgres://localhost:5432/'

    // databaseURL: process.env.DATABASE_URL || 'postgres://localhost:5432/kmerino'

    /* This is used for the PostGres DB server */
    /*
    In the terminal, first export the link to the PG DB: 
      export DATABASE_URL='postgres://mlsnfeluxqiuff:9ChVkwF-1ypBrOsmB_kNV8rEDi@ec2-54-197-245-93.compute-1.amazonaws.com:5432/de5lornqrnncva'
    Then run nodemon: 
      DATABASE_URL='postgres://mlsnfeluxqiuff:9ChVkwF-1ypBrOsmB_kNV8rEDi@ec2-54-197-245-93.compute-1.amazonaws.com:5432/de5lornqrnncva?ssl=true' nodemon app.js
    If the Heroku toolbelt and the PGAdmin are both installed, run the following to access the PG DB in ther terminal: 
      heroku pg:psql --app habitudein30
    */
    // databaseURL: process.env.DATABASE_URL || 'postgres://mlsnfeluxqiuff:9ChVkwF-1ypBrOsmB_kNV8rEDi@ec2-54-197-245-93.compute-1.amazonaws.com:5432/de5lornqrnncva'
};