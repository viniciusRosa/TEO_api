
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {
          user_id: 2,
          school_id: 1,
          node_id: 1,
          shift: 'manha',
          series: '6 ano',
          class: '123s',
          image: 1,
          borndate: '27/01/1988',
          cpf: '34534534',
          rg: '13434534534',
          address: 'rua tal',
          number: '234',
          complement: '',
          uf: 'RS',
          city: 'osorio',
          cep: '234234234'
        },
      ]);
    });
};
