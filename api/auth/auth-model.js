const db = require('../data/db-config');


const getAllClients = () => {
    return db('clients');
};

const getAllInstructors = () => {
    return db('instructors');

};

const insertUser = async user => {
    const [newUser] = await db('clients').insert(user, ['client_id','client_name', 'role']);
    return newUser;
};

const findClient = client => {
    return  db('clients').where('client_name', client.client_name)
};








module.exports = {
    getAllClients,
    insertUser,
    getAllInstructors,
    findClient,
};



































