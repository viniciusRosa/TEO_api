
exports.up = knex => knex.schema.createTable('files', table => {
  table.uuid('id').primary(),
  table.string('filename'),
  table.string('originalname'),
  table.string('fieldname'),
  table.string('mimetype'),
  table.string('destination'),
  table.string('path'),
  table.timestamp('created_at').defaultTo(knex.fn.now()),
  table.timestamp('updated_at').defaultTo(knex.fn.now())
})

exports.down = knex => knex.schema.dropTable('files')
