// Default filename is env.yaml.
const connection = process.env.PG_CONNECTION_STRING || {
  host: process.env.DB_HOST || '127.0.0.1',
  database: process.env.DB_NAME || 'analytics'
};

const config = {
  client: 'pg',
  connection
};

const db = require('knex')(config);

export default function(container) {
  return db;
}
