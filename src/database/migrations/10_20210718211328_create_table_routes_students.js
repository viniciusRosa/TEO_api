exports.up = knex => knex.schema.createTable('routes_students', table => {
  table.uuid('id').primary(),
  table.uuid('route_id')
      .references('id')
      .inTable('routes'),
  table.uuid('student_id')
      .references('id')
      .inTable('students'),
  table.timestamp('created_at').defaultTo(knex.fn.now()),
  table.timestamp('updated_at').defaultTo(knex.fn.now())
})

exports.down = knex => knex.schema.dropTable('routes_students')
