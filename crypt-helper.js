var pbkdf2 = require('pbkdf2')
const {passwordSalt, secretKey} = require('./secrets')

function hashPassword(password) {
  var derivedKey = pbkdf2.pbkdf2Sync(password, passwordSalt, 1, 32, 'sha512')
  return derivedKey.toString('hex')
}

module.exports = { hashPassword }
