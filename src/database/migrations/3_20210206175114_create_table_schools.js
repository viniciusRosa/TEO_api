
exports.up = knex => knex.schema.createTable('schools', table => {
    table.uuid('id').primary(),
    table.string('name').notNullable(),
    table.string('address').notNullable(),
    table.string('number').notNullable(),
    table.string('district').notNullable(),
    table.string('complement'),
    table.string('uf').notNullable(),
    table.string('city').notNullable(),
    table.string('cep').notNullable(),
    table.string('email').notNullable(),
    table.string('phone').notNullable(),
    table.uuid('point_id')
        .references('id')
        .inTable('points'),
    table.timestamp('created_at').defaultTo(knex.fn.now()),
    table.timestamp('updated_at').defaultTo(knex.fn.now())

  })

exports.down = knex => knex.schema.dropTable('schools')
