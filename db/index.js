const { Pool } = require('pg');

const connectionString =
  'postgres://egglipxa:SR751euVc1iQUxnY4wWs4v-3pHqh1_rt@lucky.db.elephantsql.com/egglipxa';

const pool = new Pool({
  connectionString,
});

module.exports = pool;
