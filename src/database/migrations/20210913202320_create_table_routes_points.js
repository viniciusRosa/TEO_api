exports.up = knex => knex.schema.createTable('routes_points', table => {
  table.uuid('id').primary(),
  table.uuid('route_id'),
  table.uuid('point_id'),
  table.timestamp('created_at').defaultTo(knex.fn.now()),
  table.timestamp('updated_at').defaultTo(knex.fn.now())
})

exports.down = knex => knex.schema.dropTable('routes_points')
