const pgp = require('pg-promise')();
const redis = require('redis');

// client = redis.createClient();

// client.on('err', function(err){
//   console.log(err);
// })
const localenv = process.env.db || 'localhost';

// see if redis has the record by 'record_type:record_id'
// if so return the result
// if not then query postgres for the record_id in the record_type table
// store the result in redis by 'record_type:record_id'
// return the result

// Preparing the connection details:
const cn = `postges://mrmac@${localenv}:5432/Zaget`;

// Creating a new database instance from the connection details:
const db = pgp(cn);
// Exporting the database object for shared use:
module.exports = db;
