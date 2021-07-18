
exports.up = knex => knex.schema.createTable('points', table => {
    table.uuid('id').primary(),
    table.string('name'),
    table.string('address'),
    table.string('number'),
    table.string('district'),
    table.string('uf'),
    table.string('city'),
    table.string('latitude'),
    table.string('longitude'),
    table.timestamp('created_at').defaultTo(knex.fn.now()),
    table.timestamp('updated_at').defaultTo(knex.fn.now())

  })

exports.down = knex => knex.schema.dropTable('points')
