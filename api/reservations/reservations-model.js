const db = require('../data/db-config');


const getResByClassId = class_id => {
    return db('client-reservations')
        .where('class_id', class_id)


};

const addRes = async client => {
    const res = await db('client-reservations').insert(client);
    return db('classes').where('class_id', client.class_id).first();

};










module.exports = {
    getResByClassId,
    addRes,
};



































