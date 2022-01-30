
exports.seed = function(knex) {
  return knex('instructors').del()
    .then(function () {
      return knex('instructors').insert([
        {instructor_id: 1 ,instructor_name: 'Phillip', role: 'instructor', password: '1234'},
        {instructor_id: 2 ,instructor_name: 'Vern', role: 'instructor', password: '1234'},
        {instructor_id: 3 ,instructor_name: 'Trey', role: 'instructor', password: '1234'}
      ]);
    });
};
