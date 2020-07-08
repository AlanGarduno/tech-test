
exports.up = function(knex) {
  return knex.schema.createTable('pokemon', function(t){
    t.increments('id').unsigned().primary();
    t.integer('pokedex_number').notNull();
    t.integer('user_id').notNull();
    t.foreign('user_id').references('id').inTable('user');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('pokemon');
};
