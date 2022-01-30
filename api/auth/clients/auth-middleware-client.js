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






module.exports = {
    checkClientLogin,
};





































