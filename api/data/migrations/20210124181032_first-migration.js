exports.up = async (knex) => {
  await knex.schema
    .createTable('clients', (users) => {
      users.increments('client_id')
      users.string('client_name', 200).notNullable()
      users.string('password', 200).notNullable()
      users.string('role', 200).notNullable()
      users.timestamps(false, true)
    })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('clients')
}
