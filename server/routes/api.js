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

// router.get('/', (req, res) => {
//   res.json(['Hello', 'Hi', "G'day"])
//
//   //example of a db call from a route:
//
//   db.dbFunction(knex)
//     .then(response => {
//       res.json(response)
//     })
//     .catch(err => {
//       res.sendStatus(500).send(err + ' SERVER ERROR')
//     })
// })

module.exports = router
