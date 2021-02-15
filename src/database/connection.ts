import knex from 'knex';

import dotenv from 'dotenv';
dotenv.config();


const connection = knex({
    client: 'pg',
    connection: {
      database: process.env.TEODATABASE,
      user: process.env.TEOUSER,
      password: process.env.TEOPASSWORD,
    }
})

export default connection;