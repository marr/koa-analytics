
exports.up = function(knex, Promise) {
  return knex.schema.withSchema('public').createTable('events', table => {
    table.increments();
    table.uuid('category');
    table.string('action');
    table.text('label');
    table.json('value');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.withSchema('public').dropTable('events');
};
