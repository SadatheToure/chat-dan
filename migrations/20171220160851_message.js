exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists("message", function(table) {
    table.increments();
    table.text("text");
    table.timestamps();
    table.integer("room");
    table
      .foreign("room")
      .references("id")
      .inTable("room");
    table
      .integer("owner")
      // table
      // .foreign("owner")
      // .references("id")
      // .inTable("users");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("message");
};
