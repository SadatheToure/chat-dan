exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("room_user")
    .del()
    .then(() => knex.raw("ALTER SEQUENCE room_user_id_seq RESTART WITH 4"))
    .then(function() {
      // Inserts seed entries
      return knex("room_user").insert([
        { id: 1, room_id: 1, user_id: 1 },
        { id: 2, room_id: 1, user_id: 2 },
        { id: 3, room_id: 1, user_id: 3 }
      ]);
    });
};
