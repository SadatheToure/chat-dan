exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("room")
    .del()
    .then(() => knex.raw("ALTER SEQUENCE room_id_seq RESTART WITH 2"))
    .then(function() {
      // Inserts seed entries
      return knex("room").insert([
        { id: 1, owner: 1 },
      ]);
    });
};
