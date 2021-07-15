exports.up = knex => knex.schema.createTable('users', table => {
  table.uuid('id').primary(),
  table.string('name'),
  table.string('email'),
  table.string('role')
  table.string('password'),
  table.timestamp('created_at').defaultTo(knex.fn.now()),
  table.timestamp('updated_at').defaultTo(knex.fn.now())

})

exports.down = knex => knex.schema.dropTable('users')
