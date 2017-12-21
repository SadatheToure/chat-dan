exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("message")
    .del()
    .then(() => knex.raw("ALTER SEQUENCE message_id_seq RESTART WITH 4"))
    .then(function() {
      // Inserts seed entries
      return knex("message").insert([
        { id: 1, text: "test 1", owner: 1, room: 1 },
        { id: 2, text: "test 2", owner: 1, room: 1 },
        { id: 3, text: "test 3", owner: 2, room: 1 }
      ]);
    });
};
