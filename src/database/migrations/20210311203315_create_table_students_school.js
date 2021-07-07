
exports.up = knex => knex.schema.createTable('students_school', table => {
    table.increments('id').primary(),
    table.integer('student_id')
        .notNullable()
        .references('id')
        .inTable('schools'),
    table.string('registration'),
    table.string('series').notNullable(),
    table.string('class').notNullable(),
    table.string('shift').notNullable(),
    table.timestamp('created_at').defaultTo(knex.fn.now()),
    table.timestamp('updated_at').defaultTo(knex.fn.now())

  })

exports.down = knex => knex.schema.dropTable('students_school')
