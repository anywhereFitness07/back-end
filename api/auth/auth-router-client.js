const router = require('express').Router();
const Clients = require('./auth-model');
const bcrypt = require('bcryptjs');
const { checkClientLogin } = require('./auth-middleware');
const { clientMakeToken } = require('./makeToken');
const db = require('../data/db-config');


router.get('/', (req, res, next) => {
    Clients.getAllClients()
        .then(clients => {
            res.json(clients)
        })
        .catch(next)
});

router.post('/register/client', (req, res, next) => {
    let user = req.body;
    user.password = bcrypt.hashSync(user.password, 8);

    Clients.insertUser(user)
        .then(newUser => {
            console.log(newUser)
            res.status(201).json(newUser)
        })
        .catch(next)
});

router.post('/login/client', checkClientLogin,  (req, res, next) => {
    let {  password } = req.body;

    if(bcrypt.compareSync(password, req.client.password)) {
        const token = clientMakeToken(req.client);
        res.json({
            message: `Are you ready to sweat, ${req.client.client_name}?`,
            token
        })
    } else {
        next({status: 401, message: `invalid credentials`});
    }
});

router.get('/:client_name',checkClientLogin, (req, res, next) => {
    let {client_name} = req.params
    console.log(client_name)
    Clients.findClient({client_name})
        .then(client => {
            console.log(client)
            res.json(client)
        })
        .catch(next)
});



module.exports = router;









































