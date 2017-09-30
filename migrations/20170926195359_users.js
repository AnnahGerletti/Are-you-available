exports.up = knex => knex.schema.createTable('users', table => {
  table.increments('id').primary()
  table.string('name')
  table.string('email')
  table.string('pwhash')
  table.boolean('isAdmin')
})

exports.down = knex => knex.schema.dropTable('users')
