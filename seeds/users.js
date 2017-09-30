const crypt = require('../crypt-helper')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'bob', email: 'bob@bob.com', pwhash: crypt.hashPassword('bob'), isAdmin: 'true'},
        {id: 2, name: 'Sue', email: 'sue@bob.com', pwhash: crypt.hashPassword('sue'), isAdmin: 'false'},
        {id: 3, name: 'Sal', email: 'sal@bob.com', pwhash: crypt.hashPassword('sal'), isAdmin: 'false'}
      ]);
    });
};
