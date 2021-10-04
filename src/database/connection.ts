import knex from 'knex';
const configs = require('../../knexfile');

import dotenv from 'dotenv';
dotenv.config();

console.log(process.env.NODE_ENV)

const config = process.env.NODE_ENV === 'test' ? configs.test : configs.development;

const connection = knex(config);

export default connection;
