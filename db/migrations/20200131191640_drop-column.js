
exports.up = function(knex) {
    return knex.schema.table('restaurants', (table) => {
        table.string('name');
        table.string('restaurantType');
        table.string('address');
    });
};
  
exports.down = function(knex) {
    return knex.schema.table('restaurants', (table) => {
        table.dropColumn('name');
        table.dropColumn('restaurantType');
        table.dropColumn('address');
    });
};
