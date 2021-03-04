
exports.up = knex => knex.schema.createTable('vehicles', table => {
    table.increments('id').primary(),
    table.string('vehicle_name').notNullable(),
    table.string('doc_number').notNullable(),
    table.integer('seats').notNullable(),
    table.timestamp('created_at').defaultTo(knex.fn.now()),
    table.timestamp('updated_at').defaultTo(knex.fn.now())

  })

exports.down = knex => knex.schema.dropTable('vehicles')
