const config = require('../../knexfile')[process.env.NODE_ENV || 'development']
const db = require('knex')(config)
const crypt = require('../../crypt-helper')

function loginUser (email, password) {
  const hash = crypt.hashPassword(password)
  return(db('users')
    .where({
      email: email,
      pwhash: hash
    })
    .select('isAdmin', 'id')
    .then( function (user) {
      return(user)
    })
  )
}

module.exports = {
  loginUser
}
