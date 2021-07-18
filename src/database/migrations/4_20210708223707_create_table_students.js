
exports.up = knex => knex.schema.createTable('students', table => {
    table.uuid('id').primary(),
    table.string('name'),
    table.string('email'),
    table.string('password'),
    table.uuid('school_id')
        .notNullable()
        .references('id')
        .inTable('schools'),
    table.string('shift'),
    table.string('series'),
    table.string('classe'),
    table.uuid('image'),
    table.string('borndate')
    table.string('cpf'),
    table.string('rg'),
    table.string('address'),
    table.string('number'),
    table.string('complement'),
    table.string('uf'),
    table.string('city'),
    table.decimal('latitude'),
    table.decimal('longitude'),
    table.timestamp('created_at').defaultTo(knex.fn.now()),
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })

exports.down = knex => knex.schema.dropTable('students')
