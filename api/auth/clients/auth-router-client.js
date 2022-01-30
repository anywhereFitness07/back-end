const router = require('express').Router();
const Clients = require('./auth-model-client');
const bcrypt = require('bcryptjs');
const { checkClientLogin } = require('./auth-middleware-client');
const { clientMakeToken } = require('../make-token/clientMakeToken');


router.get('/', (req, res, next) => {
    Clients.getAllClients()
        .then(clients => {
            res.json(clients)
        })
        .catch(next)
});

router.post('/register', (req, res, next) => {
    let user = req.body;
    user.password = bcrypt.hashSync(user.password, 8);

    Clients.insertClient(user)
        .then(newUser => {
            console.log(newUser)
            res.status(201).json(newUser)
        })
        .catch(next)
});

router.post('/login', checkClientLogin,  (req, res, next) => {
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

router.delete('/:client_id', (req, res, next) => {
    let { client_id } = req.params;

    Clients.removeClient(client_id)
        .then(() => {
            res.json({
                message: `Account deleted. Goodbye.`
            })
        })
        .catch(next)
})



module.exports = router;









































