
exports.seed = function(knex) {
  return knex('instructors').del()
    .then(function () {
      return knex('instructors').insert([
        {instructor_name: 'Remy LeBeau', role: 'instructor', password: '1234'},
        {instructor_id: 2 ,instructor_name: 'James Howlette', role: 'instructor', password: '1234'},
        {instructor_id: 3 ,instructor_name: 'Alison Blair', role: 'instructor', password: '1234'},
        {instructor_id: 4 ,instructor_name: 'Alfred Yankovic', role: 'instructor', password: '1234'},
        {instructor_id: 5,instructor_name: 'Betsy Braddock', role: 'instructor', password: '1234'},
        {instructor_id: 6 ,instructor_name: 'Piotr Rasputin', role: 'instructor', password: '1234'},
        {instructor_id: 7 ,instructor_name: 'Kurt Wagner', role: 'instructor', password: '1234'},
      ]);
    });
};