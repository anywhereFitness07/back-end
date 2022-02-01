const db = require('../data/db-config');


const getAll = () => {
    return db('client_punch_card');
};

const addCard = async card => {
    const cards = await db('client_punch_card').insert(card)


    return db('client_punch_card')

}

console.log('add card: ', addCard)

const deleteCard = pc_id => {
    return db('client_punch_card').where('pc_id', pc_id).del()

}




module.exports = {
    getAll,
    addCard,
    deleteCard,
}




































