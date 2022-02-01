const db = require('../data/db-config');


const getClasses = () => {
    return db('classes')
};

const getResByClassId = class_id => {
    return db('client_reservations')
        .where('class_id', class_id)
};

const addRes = async client => {
    await db('client_reservations').insert(client);
     await  db('classes')
        .where('class_id', client.class_id)
        .increment('current_clients', 1)

    return db('classes').where('class_id', client.class_id).first();
};

const cancelRes = async reservation => {
    await db('client_reservations').where('cr_id', reservation.cr_id).del();
    await db('classes')
        .where('class_id', reservation.class_id)
        .decrement('current_clients', 1)

    return db('classes').where('class_id', reservation.class_id).first();

}

const punchCard = () => {
    return db('client_reservations')
        .join('client_punch_card', 'client_punch_card.cr_id', 'client_reservations.cr_id')


    // return db('client_punch_card')
    //     .select('cr_id')

}


module.exports = {
    getResByClassId,
    addRes,
    getClasses,
    cancelRes,
    punchCard,
};



































