const db = require('../../data/db-config');


const checkClientNameExists= async (req, res, next) => {
    const client_name = req.body.client_name;
    try {
        const client = await db('clients').where("client_name", client_name).first();
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

const checkClientById = async (req, res, next) => {
    const clientId = await db('clients')
        .where('client_id', req.params.client_id)
        .first();
    if(clientId) {
        next();
    } else {
        next({
            status:404,
            message: `Client not found`
        });
    }
};

const checkBody = (req, res, next) => {
    const { client_name, password } = req.body

    if(!client_name || !password) {
        next({
            status: 401,
            message: `Client_name and password are required`
        })
    } else {
        next()
    }
};

module.exports = {
    checkClientNameExists,
    checkBody,
    checkClientById,
};





































