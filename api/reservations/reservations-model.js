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

const cancelRes = reservation => {
    return  db('client_reservations').where('cr_id', reservation).del();
    // await db('classes')
    //     .where('class_id', reservation)
    //     .decrement('current_clients', 1)
    //
    // return {message: `Res canceled`}

};

const punchCard = () => {
    return db('client_punch_card AS cpc')
        .join('client_reservations AS cr', 'cr.cr_id', 'cpc.cr_id')
        .join('classes AS cs', 'cs.class_id', 'cr.class_id')
        .join('clients AS cl', 'cl.client_id', 'cr.client_id')

};

const getResByClientId = async id => {
    const client = await db('client_reservations').where('client_id', id).first();
    const classes = await db('classes').where('class_id', client.class_id).first();
    return classes
};



module.exports = {
    getResByClassId,
    addRes,
    getClasses,
    cancelRes,
    punchCard,
    getResByClientId,
};



































