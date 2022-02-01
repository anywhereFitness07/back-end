const db = require('../data/db-config');

const checkClassSize = async (req, res, next) => {
    const { class_id } = req.body;
    try {
        const classRes = await db('client_reservations').where({class_id});
        const class_size = await db('classes').where({class_id}).first();

        if(classRes.length >= class_size.max_class_size) {
            next({status: 401, message: `I'm sorry, ${class_size.class_name} is full.`})
        } else {
            req.class = class_size
            next() }
    }
    catch (err) {
        next(err)
    }
};



const checkPunchCard = (req, res, next) => {
    // try {
    //     const { client_id } = req.body
    //     const
    //
    //     next()
    // }
    // catch (err) {
    //     next(err);
    // }
    // console.log(req.body)
    next()
}

module.exports = {
    checkClassSize,
    checkPunchCard
};





// const card = await db('client_punch_card AS cpc')
//     .join('client_reservations AS cr', 'cr.cr_id', 'cpc.cr_id')
//     // .join('classes AS cs', 'cs.class_id', 'cr.class_id')
//     // .join('clients AS cl', 'cl.client_id', 'cr.client_id')
//     .select('cpc.client_id', 'cr.class_id')
//     .where('cpc.client_id', client_id)





































