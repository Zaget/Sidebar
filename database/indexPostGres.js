const pgp = require('pg-promise')();

const localenv = process.env.db || 'localhost';


const cn = {
  host: 'zagnar.c10ymjuxq5ug.us-west-1.rds.amazonaws.com',
  port: 5432,
  database: 'zaget',
  user: 'tom',
  password: 'mypassword',
};


const db = pgp(cn);

module.exports = db;

