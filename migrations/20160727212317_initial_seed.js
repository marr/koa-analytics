
exports.up = function(knex, Promise) {
  const events = knex.schema.withSchema('public').createTable('events', table => {
    table.increments();
    table.uuid('user');
    table.string('category');
    table.string('action');
    table.text('label');
    table.json('value');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });

  const users = knex.schema.withSchema('public').createTable('users', table => {
    table.uuid('uuid');
    table.string('name');
  });

  return Promise.all([events, users]);
};

exports.down = function(knex, Promise) {
  return knex.schema.withSchema('public').dropTable('events');
};
