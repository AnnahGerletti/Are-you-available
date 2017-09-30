
exports.up = knex => knex.schema.createTable('events', table => {
  table.increments('id').primary()
  table.integer('date_id').references('dates.id')
  table.string('eventName')
  table.string('description')
  table.dateTime('rangeStart')
  table.dateTime('rangeEnd')
  table.binary('photo')
  table.dateTime('finalStart')
  table.dateTime('finalEnd')
})

exports.down = knex => knex.schema.dropTable('events')
