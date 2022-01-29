const db = require('../data/db-config');


const getAllClients = () => {
    return db('clients');
}

const insertUser = async user => {
    const [newUser] = await db('clients').insert(user, ['client_id','client_name', 'role']);
    return newUser
}










module.exports = {
    getAllClients,
    insertUser,
};



































