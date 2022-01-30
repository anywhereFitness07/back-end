
exports.seed = function(knex) {
  return knex('classes').del()
    .then(function () {
      return knex('classes').insert([
        { class_name: 'Yoga', start_time: '5:00 a.m.', class_type: 'Cardio', duration: '45 mins', intensity_level: 2, location: 'Brentwood', max_class_size: 30, instructor_id: 1 },
        { class_name: 'Spin Class', start_time: '6:00 a.m.', class_type: 'Cardio', duration: '45 mins', intensity_level:3, location: 'Mt. Brook', max_class_size: 30, instructor_id: 1 },
        { class_name: 'HIIT Training', start_time: '6:00 a.m.', class_type: 'Strength and Conditioning', duration: '1 hr', intensity_level:'5', location: 'Homewood', max_class_size: 30, instructor_id: 1 },
        { class_name: 'Stretch', start_time: '8:00 a.m.', class_type: 'Cool down', duration: '30 mins', intensity_level: 1, location: 'Mt. Brook', max_class_size: 30, instructor_id: 1 },
        { class_name: 'Jazzercise', start_time: '10:00 a.m.', class_type: 'Cardio', duration: '45 mins', intensity_level:3, location: 'Mt. Brook', max_class_size: 30, instructor_id: 1 },
        { class_name: 'Strength Training', start_time: '12:00 p.m.', class_type: 'Strength and Conditioning', duration: '1 hr', intensity_level:4, location: 'Homewood', max_class_size: 30, instructor_id: 1 },
        { class_name: 'Marathon Prep', start_time: '12', class_type: 'Cardio', duration: '1.5 hrs', intensity_level:'5', location: 'Brentwood', max_class_size: 30, instructor_id: 1 },
      ]);
    });
};