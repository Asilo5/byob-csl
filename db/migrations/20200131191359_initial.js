
exports.up = function(knex) {
    return knex.schema
      .createTable('cities', (table) => {
         table.increments('id').primary();
         table.string('city');
         table.string('avgVegans');
      })
  
      .createTable('restaurants', (table) => {
          table.increments('id').primary();
          table.string('restaurant');
          table.integer('restaurant_id').unsigned()
          table.foreign('restaurant_id').references('cities.id');
      })
  };
  
  exports.down = function(knex) {
     return knex.schema
       .dropTable('restaurants')
       .dropTable('cities')
  };
