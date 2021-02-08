// const knexfile = require('../../knexfile');
// const knex = require('knex')(knexfile.development);

// module.exports = knex;


import knex from 'knex';

const connection = knex({
    client: 'pg',
    connection: {
      database: "dbv1",
      user: "pguser",
      password: "1234"
    }
})

export default connection;