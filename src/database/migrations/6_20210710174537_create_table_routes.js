exports.up = knex => knex.schema.createTable('routes', table => {
  table.uuid('id').primary(),
  table.string('name'),
  table.decimal('vacancy'),
  table.string('shift'),
  table.string('timeDeparture'),
  table.string('timeArrival'),
  table.timestamp('created_at').defaultTo(knex.fn.now()),
  table.timestamp('updated_at').defaultTo(knex.fn.now())
})

exports.down = knex => knex.schema.dropTable('routes')
