exports.up = knex => knex.schema.createTable('students_routes', table => {
  table.uuid('id').primary(),
  table.uuid('student_id'),
  table.uuid('route_id'),
  table.timestamp('created_at').defaultTo(knex.fn.now()),
  table.timestamp('updated_at').defaultTo(knex.fn.now())
})

exports.down = knex => knex.schema.dropTable('students_routes')
