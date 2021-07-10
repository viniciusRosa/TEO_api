
exports.up = knex => knex.schema.createTable('students', table => {
    table.increments('id').primary(),
    table.integer('image'),
    table.string('cpf'),
    table.string('rg').notNullable(),
    table.string('address').notNullable(),
    table.string('number').notNullable(),
    table.string('complement'),
    table.string('uf').notNullable(),
    table.string('city').notNullable(),
    table.string('cep').notNullable(),
    table.string('email').notNullable(),
    table.string('phone_number'),
    table.timestamp('created_at').defaultTo(knex.fn.now()),
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })

exports.down = knex => knex.schema.dropTable('students')
