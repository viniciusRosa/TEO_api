
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('vacancyrequests').del()
    .then(function () {
      // Inserts seed entries
      return knex('vacancyrequests').insert([
        {
          user_id: 2,
          status: 'in analysis',
        }

      ]);
    });
};
