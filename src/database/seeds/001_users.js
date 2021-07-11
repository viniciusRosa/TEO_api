
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          name: 'Vinicius Rosa',
          email: 'vinicus.rosa00@gmail.com',
          role: 'admin',
          password: '1234'
        },

        {
          name: 'Edson Rosa',
          email: 'edson.rosa00@gmail.com',
          role: 'student',
          password: '1234'
        }

      ]);
    });
};
