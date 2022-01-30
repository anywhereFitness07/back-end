const db = require('../data/db-config');


const getAllInstructors = () => {
    return db('instructors')

}

const insertInstructor = async instructor => {
    const [newInstructor] = await db('instructors').insert(instructor, ['instructor_id','instructor_name', 'role']);
    return newInstructor;
};







module.exports = {
    getAllInstructors,
    insertInstructor,
}





































