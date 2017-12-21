exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists("room_user", function(table) {
    table.increments();
    table.integer("user_id");
    table
      .foreign("user_id")
      .references("id")
      .inTable("users");

    table.integer("room_id");
    table
      .foreign("room_id")
      .references("id")
      .inTable("room");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("room_user");
};
