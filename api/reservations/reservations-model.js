const db = require('../data/db-config');


const getClasses = () => {
    return db('classes')
};

const getResByClassId = class_id => {
    return db('client-reservations')
        .where('class_id', class_id)
};

const addRes = async client => {
    await db('client-reservations').insert(client);
     await  db('classes')
        .where('class_id', client.class_id)
        .increment('current_clients', 1)

    return db('classes').where('class_id', client.class_id).first();
};

const cancelRes = async reservation => {
    await db('client-reservations').where('cr_id', reservation.cr_id).del();
    await db('classes')
        .where('class_id', reservation.class_id)
        .decrement('current_clients', 1)

    return db('classes').where('class_id', reservation.class_id).first();

}



module.exports = {
    getResByClassId,
    addRes,
    getClasses,
    cancelRes,
};



































