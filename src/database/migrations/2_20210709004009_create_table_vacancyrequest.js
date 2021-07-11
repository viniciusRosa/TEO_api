exports.up = knex => knex.schema.createTable('vacancyrequests', table => {
  table.increments('id').primary(),
  table.integer('user_id')
        .notNullable()
        .references('id')
        .inTable('users'),
  table.string('status'),
  table.timestamp('created_at').defaultTo(knex.fn.now()),
  table.timestamp('updated_at').defaultTo(knex.fn.now())

})

exports.down = knex => knex.schema.dropTable('vacancyrequests')
