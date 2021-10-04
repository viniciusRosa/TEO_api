// Update with your config settings.

require('dotenv').config();

module.exports = {


  development: {
    client: 'pg',
    connection: {
      database: process.env.TEODATABASE,
      user: process.env.TEOUSER,
      password: process.env.TEOPASSWORD,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: `${__dirname}/src/database/db.sqlite3`
    },
    migrations: {
      directory: `${__dirname}/src/database/migrations`
    },
    useNullAsDefault: true,
  },


};
