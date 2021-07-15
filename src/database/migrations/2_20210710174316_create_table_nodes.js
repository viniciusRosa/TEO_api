exports.up = knex => knex.schema.createTable('nodes', table => {
  table.uuid('id').primary(),
  table.timestamp('created_at').defaultTo(knex.fn.now()),
  table.timestamp('updated_at').defaultTo(knex.fn.now())

})

exports.down = knex => knex.schema.dropTable('nodes')
