const db = require('../../data/db-config');


const getAllInstructors = () => {
    return db('instructors')
};

const insertInstructor = async instructor => {
    const [newInstructor] = await db('instructors').insert(instructor, ['instructor_id','instructor_name', 'role']);
    return newInstructor;
};

const removeInstructor = instructor_id => {
    return db('instructors').where('instructor_id', instructor_id).del();
};

module.exports = {
    getAllInstructors,
    insertInstructor,
    removeInstructor,
};





































