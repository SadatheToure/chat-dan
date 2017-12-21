
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => knex.raw('ALTER SEQUENCE users_id_seq RESTART WITH 4'))
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Sadathe Owner', phone: '1234567890'},
        {id: 2, name: 'Sadathe User #1', phone: '1234567890'},
        {id: 3, name: 'Sadathe User #2', phone: '1234567890'}
      ]);
    });
};
