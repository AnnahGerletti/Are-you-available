var express = require('express')
var router = express.Router()

const login = require('../db/logindb')
const events = require('../db/eventsdb')

router.post('/login', (req, res) => {
    console.log(req.body.email, req.body.password)
    login.loginUser(req.body.email, req.body.password)
    .then(function(user) {
        res.send(user)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.get('/events', (req, res) => {
    events.listEvents()
    .then(function(events) {
        res.send(events)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.get('/event/:id', (req, res) => {
    events.getEvent(req.params.id)
    .then(function(event) {
        res.send(event[0])
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.post('/date', (req, res) => {
    date = req.body
    user = req.body.user_id
    event= req.body.event_id
    events.insertDate(date.start, date.end, user, event)
    .then(response => {
      res.status(201).json(response)
  })
    .catch((err) => {
    res.status(500).send(err.message)
  })
})

module.exports = router
