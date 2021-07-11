
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('schools').del()
    .then(function () {
      // Inserts seed entries
      return knex('schools').insert([
        {
          school_name: 'polivalente',
          image: 1,
          address: 'rua costa game',
          number: 123,
          district: 'centro',
          complement: '',
          uf: 'RS',
          city: 'Osorio',
          cep: '9565564',
          email: 'sdfsdf@sdfsdf.com',
          phone_number: '646546464',
          node_id: 1
        }
      ]);
    });
};
