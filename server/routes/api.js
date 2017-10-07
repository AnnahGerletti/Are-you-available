var express = require('express')
var router = express.Router()

const login = require('../api/login')

router.post('/login', (req, res) => {
  console.log(req.body.email, req.body.password)
  login.loginUser(req.body.email, req.body.password)
    .then (function (user) {
    res.send(user)
  })
})

module.exports = router
