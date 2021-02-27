
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('files').del()
    .then(function () {
      // Inserts seed entries
      return knex('files').insert([
        {filename: '1613956183344-908135305-educacao_infantil.png', originalname: 'educacao_infantil.png', fieldname: 'school', mimetype: 'image/png',destination: '/home/viniciusrosa/Sandbox/TCC/TEO_backend/Uploads',
        path: '/home/viniciusrosa/Sandbox/TCC/TEO_backend/Uploads/1613956183344-908135305-educacao_infantil.png'},
      ]);
    });
};
