import request from 'superagent'


function loginUser (creds) {
  request
    .post('/api/v1/login')
    .send(creds) // sends a JSON post body
    .end((err, res) => {
      console.log('err' + err)
      console.log(res.body)
      if (res.body.length === 0) {
        alert('Not a user')
      } else if (res.body.length === 1 && res.body[0].isAdmin === 1) {
        alert('Admin User')
        document.location = '/#/' + res.body[0].id + '/admin'
      } else {
        alert('Standard User')
        document.location = '/#/' + res.body[0].id + '/events'
      }
      // Calling the end function will send the request
    })
}

function listEvents(callback){
  request
    .get('/api/v1/events')
    .end((err, res) => {
      callback(err, res.body)
    })
}

function getEvent(id, callback){
  request
    .get('/api/v1/event/' + id)
    .end((err, res) => {
      callback(err, res.body)
    })
}

function insertDate(saveDates, callback){
  request
    .post('/api/v1/date')
    .send(saveDates)
    .end((err, res) => {
      callback(err, res.body)
    })
}


module.exports = {
  loginUser,
  listEvents,
  getEvent,
  insertDate
}
