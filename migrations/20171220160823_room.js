exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists("room", function(table) {
    table.increments();
    table.timestamps();

    table.integer("owner");
    // table
    //   .foreign("owner")
    //   .references("id")
    //   .inTable("user");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("room");
};
