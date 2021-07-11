
exports.up = knex => knex.schema.createTable('students', table => {
    table.increments('id').primary(),
    table.integer('user_id')
        .notNullable()
        .references('id')
        .inTable('users'),
    table.integer('school_id')
        .notNullable()
        .references('id')
        .inTable('schools'),
    table.integer('node_id'),
    table.string('shift'),
    table.string('series'),
    table.string('class'),
    table.integer('image'),
    table.string('borndate')
    table.string('cpf'),
    table.string('rg'),
    table.string('address'),
    table.string('number'),
    table.string('complement'),
    table.string('uf'),
    table.string('city'),
    table.string('cep'),
    table.timestamp('created_at').defaultTo(knex.fn.now()),
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })

exports.down = knex => knex.schema.dropTable('students')
