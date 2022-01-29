const router = require('express').Router();
const Clients = require('./auth-model');

router.get('/', (req, res, next) => {
    Clients.getAllClients()
        .then(clients => {
            res.json(clients)
        })
        .catch(next)
});

router.post('/register', (req, res, next) => {
    Clients.insertUser(req.body)
        .then(newUser => {
            console.log(newUser)
            res.status(201).json(newUser)
        })
        .catch(next)
});


module.exports = router;









































