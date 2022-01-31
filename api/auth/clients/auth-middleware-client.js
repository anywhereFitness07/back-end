const db = require('../../data/db-config');


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
    checkClientLogin,
    checkBody,
};





































