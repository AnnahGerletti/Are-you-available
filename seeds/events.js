
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {id: 1, eventName:'Beach Party', description:'BBQ at Oriental Beach, vollyball, hot dogs and summer fun.', rangeStart:'2017-11-01' , rangeEnd:'2017-11-20', photo: '/images/beachParty.jpg', finalStart:', finalEnd:'},
        {id: 2, eventName:'After Work Drinkns', description:'Long day at the office and need a beer.', rangeStart:'2017-10-10', rangeEnd:'2017-10-20', photo: '/images/workDrinks.jpg' , finalStart:', finalEnd:'},
        {id: 3, eventName:'Annah and Nicks Wedding', description:'A celebration of love', rangeStart:'2020-09-01' , rangeEnd:'2020-12-01', photo:'/images/beachWedding.jpg' , finalStart:'', finalEnd:''}
      ]);
    });
};
