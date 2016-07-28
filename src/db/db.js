const yenv = require('yenv');

// Default filename is env.yaml.
const env = yenv();
const connection = process.env.PG_CONNECTION_STRING || {
  host: env.DB_HOST,
  database: env.DB_NAME
};

const config = {
  client: 'pg',
  connection
};

const db = require('knex')(config);

export default function(container) {
  return db;
}
