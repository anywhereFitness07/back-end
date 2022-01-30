const db = require('../data/db-config');


const getAllClasses = () => {
    return db('classes');
};

const getClassById = class_id => {
    return db('classes').where('class_id', class_id);
};

const getClass = cat => {
    return db('classes').where(`${cat}`, cat).first();
};

const addClass = async newClass => {
    const [newClasss] = await db('classes')
        .insert(newClass, [
            'class_id',
            'class_name',
            'start_time',
            'duration',
            'intensity_level',
            'location',
            'current_clients',
            'max_class_size'
        ]);

    return newClasss;

};


const removeClass = class_id => {
    return db('classes').where('class_id', class_id).del();
};



module.exports = {
    getAllClasses,
    getClassById,
    getClass,
    addClass,
    removeClass,

};
























