exports.up = async (knex) => {
  await knex.schema
    .createTable('clients', (users) => {
      users.increments('client_id')
      users.string('client_name', 200).notNullable()
      users.string('password', 200).notNullable()
      users.string('role', 200).notNullable()
      users.timestamps(false, true)
    })
    .createTable('instructors', tbl => {
        tbl.increments('instructor_id')
        tbl.string('instructor_name').notNullable()
        tbl.string('role').notNullable()
        tbl.string('password').notNullable()

    })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('instructors')
  await knex.schema.dropTableIfExists('clients')
}
