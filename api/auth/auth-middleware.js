const db = require('../data/db-config');


const checkClientLogin = async (req, res, next) => {
    const {client_name} = req.body;
    try {
        const client = await db('clients').where({client_name}).first();
        if(client) {
            req.client = client;
            next()
        } else {
            next({
                status: 404,
                message: `Client not found`
            })
        }

    }
    catch (err) {
        next(err)
    }
};

const checkInstLogin = async (req, res, next) => {
    const instructor_name = req.body;

    try {
        const instructor = await db('clients').where({instructor_name}).first();
        if(instructor) {
            req.client = instructor;
            next();
        } else {
            next({status: 404, message: `Invalid Credentials`})
        }
    }
    catch (err) {
        next(err)
    }
};




module.exports = {
    checkClientLogin,
    checkInstLogin,
};





































