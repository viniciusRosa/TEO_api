exports.up = knex => knex.schema.createTable('vacancyrequests', table => {
  table.uuid('id').primary(),
  table.uuid('student_id')
        .notNullable()
        .references('id')
        .inTable('students'),
  table.string('status'),
  table.uuid('route'),
  table.timestamp('created_at').defaultTo(knex.fn.now()),
  table.timestamp('updated_at').defaultTo(knex.fn.now())

})

exports.down = knex => knex.schema.dropTable('vacancyrequests')
