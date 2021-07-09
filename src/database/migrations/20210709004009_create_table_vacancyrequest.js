exports.up = knex => knex.schema.createTable('vacancyrequests', table => {
  table.increments('id').primary(),
  table.integer('userid'),
  table.string('status'),
  table.timestamp('created_at').defaultTo(knex.fn.now()),
  table.timestamp('updated_at').defaultTo(knex.fn.now())

})

exports.down = knex => knex.schema.dropTable('vacancyrequests')
