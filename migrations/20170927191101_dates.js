
exports.up = knex => knex.schema.createTable('dates', table => {
  table.increments('id').primary()
  table.integer('user_id').references('users.id')
  table.integer('event_id').references('events.id')
  table.date('start')
  table.date('end')
})

exports.down = knex => knex.schema.dropTable('dates')
