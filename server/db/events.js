const config = require('../../knexfile')[process.env.NODE_ENV || 'development']
const db = require('knex')(config)

function listEvents () {
  return(db('events')
    .select('id')
    .select('eventName')
  )
}

function getEvent (id) {
  return(db('events')
    .select()
    .where('id', id)
  )
}

module.exports ={
  listEvents,
  getEvent
}
