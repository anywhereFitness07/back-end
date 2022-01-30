const db = require('../data/db-config');


const getAllClients = () => {
    return db('clients');
};

const getAllInstructors = () => {
    return db('instructors');

};

const insertClient = async user => {
    const [newClient] = await db('clients').insert(user, ['client_id','client_name', 'role']);
    return newClient;
};

const findClient = client => {
    return  db('clients').where('client_name', client.client_name)
};







module.exports = {
    getAllClients,
    insertClient,
    getAllInstructors,
    findClient,
};



































