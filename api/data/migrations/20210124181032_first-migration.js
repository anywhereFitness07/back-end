
exports.up = async (knex) => {
  await knex.schema
    .createTable('clients', (tbl) => {
      tbl.increments('client_id')
      tbl.string('client_name', 64).notNullable()
      tbl.string('password', 24).notNullable()
      tbl.string('role', 8).defaultTo('client')
      tbl.timestamps(false, true)
    })
    .createTable('instructors', tbl => {
        tbl.increments('instructor_id')
        tbl.string('instructor_name').notNullable()
        tbl.string('role', 12).defaultTo('instructor')
        tbl.string('password').notNullable()
    })
      .createTable('classes', tbl => {
          tbl.increments('class_id')
          tbl.string('class_name').notNullable()
          tbl.string('start_time').notNullable()
          tbl.string('class_type').notNullable()
          tbl.string('duration').notNullable()
          tbl.integer('intensity_level').notNullable()
          tbl.string('location').notNullable()
          tbl.integer('current_clients').defaultTo(0)
          tbl.integer('max_class_size').notNullable()
          tbl.integer('instructor_id').notNullable()
              .unsigned()
              .references('instructor_id')
              .inTable('instructors')
              .onUpdate('RESTRICTED')
              .onDelete('RESTRICTED')
      })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('classes')
  await knex.schema.dropTableIfExists('instructors')
  await knex.schema.dropTableIfExists('clients')
}
