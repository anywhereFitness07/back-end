const db = require('../data/db-config');


const getResByClassId = class_id => {
    return db('classes')
        .where('class_id', class_id)


};

const addRes = async client => {
    await db('client-reservations').insert(client);
     await  db('classes')
        .where('class_id', client.class_id)
        .increment('current_clients', 1)

    return db('classes').where('class_id', client.class_id).first();

};










module.exports = {
    getResByClassId,
    addRes,
};



































