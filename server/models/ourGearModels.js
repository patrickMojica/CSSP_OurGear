const { Pool } = require('pg');

const PG_URI = 'postgres://flgbolqh:a1Jd0vGKrgbQewXSu97ZU0d3Nd7Ina4P@kashin.db.elephantsql.com/flgbolqh';

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI
});


// ADD GITHUB LINK for SCHEMA png

// We export an object that contains a property called query,
// which is a function that returns the invocation of pool.query() after logging the query
// This will be required in the controllers to be the access point to the database
module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};
