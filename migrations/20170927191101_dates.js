
exports.up = knex => knex.schema.createTable('dates', table => {
  table.increments('id').primary()
  table.integer('user_id').references('users.id')
  table.dateTime('start')
  table.dateTime('end')
})

exports.down = knex => knex.schema.dropTable('dates')
