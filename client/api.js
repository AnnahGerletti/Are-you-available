import request from 'superagent'


function loginUser (creds) {
  request
    .post('http://localhost:3000/api/login')
    .send(creds) // sends a JSON post body
    .end((err, res) => {
      console.log('err' + err)
      console.log(res.body)
      if (res.body.length === 0) {
        alert('Not a user')
      } else if (res.body.length === 1 && res.body[0].isAdmin === 1) {
        alert('Admin User')
        document.location = '/#/admin'
      } else {
        alert('Standard User')
        document.location = '/#/events'
      }
      // Calling the end function will send the request
    })
}

function listEvents(){
  request
    .get('http://localhost:3000/api/events')
    .end((err, res) => {
      this.setState({
        events: res.body
      })
    })
}

function getEvent(id){
  request
    .get('http://localhost:3000/api/event/' + id)
    .end((err, res) => {
      this.setState({
        event: res.body
      })
    })
}
module.exports = {
  loginUser,
  listEvents,
  getEvent
}
