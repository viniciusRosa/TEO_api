
exports.up = knex => knex.schema.createTable('messages', table => {
    table.uuid('id').primary(),
    table.uuid('vacancyrequest_id')
      .references('id')
      .inTable('vacancyrequests'),
    table.uuid('from_id'),
    table.uuid('to_id')
    table.string('message'),
    table.timestamp('created_at').defaultTo(knex.fn.now()),
    table.timestamp('updated_at').defaultTo(knex.fn.now())

  })

exports.down = knex => knex.schema.dropTable('messages')
