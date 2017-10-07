
exports.up = knex => knex.schema.createTable('events', table => {
  table.increments('id').primary()
  table.string('eventName')
  table.string('description')
  table.date('rangeStart')
  table.date('rangeEnd')
  table.string('photo')
  table.date('finalStart')
  table.date('finalEnd')
})

exports.down = knex => knex.schema.dropTable('events')
