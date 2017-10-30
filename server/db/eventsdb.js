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

function insertDate (start, end, user_id, event_id) {
  return (db('dates')
    .insert({
      start:start, end:end, user_id:user_id, event_id:event_id})
  )
}

module.exports ={
  listEvents,
  getEvent,
  insertDate
}

//why pass in the db like doggo did??
