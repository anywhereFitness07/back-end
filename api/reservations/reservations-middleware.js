const db = require('../data/db-config');

const checkClassSize = async (req, res, next) => {
    const { class_id } = req.body
    console.log(class_id)

    try {
        const classRes = await db('client-reservations').where({class_id});
        const class_size = await db('classes').where({class_id}).first()
        console.log(classRes)
        console.log(class_size)

        if(classRes.length >= class_size.max_class_size) {
            next({status: 401, message: `I'm sorry, ${class_size.class_name} is full.`})
        }else (next())
    }
    catch (err) {
        next(err)
    }
}

module.exports = {
    checkClassSize
}










































