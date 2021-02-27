
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('schools').del()
    .then(function () {
      // Inserts seed entries
      return knex('schools').insert([
        {school_name: 'Escola 1', image: 1, address: 'Endereço', number: '234',complement: 'complemento',uf: 'RS', city: 'Osório', district: 'Porto lacustre',
        cep: '95520-000',email: 'Email@email.com',phone_number: '(51)99999-9999',latitude: '-29.890161',longitude: '-50.257344'},

        {school_name: 'Escola 2', image: 1, address: 'Endereço', number: '234',complement: 'complemento',uf: 'RS', city: 'Osório', district: 'Porto lacustre',
        cep: '95520-000',email: 'Email@email.com',phone_number: '(51)99999-9999',latitude: '-29.890161',longitude: '-50.257344'},

        {school_name: 'Escola 3', image: 1, address: 'Endereço', number: '234',complement: 'complemento',uf: 'RS', city: 'Osório', district: 'Porto lacustre',
        cep: '95520-000',email: 'Email@email.com',phone_number: '(51)99999-9999',latitude: '-29.890161',longitude: '-50.257344'},

        {school_name: 'Escola 4', image: 1, address: 'Endereço', number: '234',complement: 'complemento',uf: 'RS', city: 'Osório', district: 'Porto lacustre',
        cep: '95520-000',email: 'Email@email.com',phone_number: '(51)99999-9999',latitude: '-29.890161',longitude: '-50.257344'},

        {school_name: 'Escola 5', image: 1, address: 'Endereço', number: '234',complement: 'complemento',uf: 'RS', city: 'Osório', district: 'Porto lacustre',
        cep: '95520-000',email: 'Email@email.com',phone_number: '(51)99999-9999',latitude: '-29.890161',longitude: '-50.257344'},

        {school_name: 'Escola 6', image: 1, address: 'Endereço', number: '234',complement: 'complemento',uf: 'RS', city: 'Osório', district: 'Porto lacustre',
        cep: '95520-000',email: 'Email@email.com',phone_number: '(51)99999-9999',latitude: '-29.890161',longitude: '-50.257344'},

        {school_name: 'Escola 7', image: 1, address: 'Endereço', number: '234',complement: 'complemento',uf: 'RS', city: 'Osório', district: 'Porto lacustre',
        cep: '95520-000',email: 'Email@email.com',phone_number: '(51)99999-9999',latitude: '-29.890161',longitude: '-50.257344'},

      ]);
    });
};
