const router = require('express').Router();
const Classes = require('./classes-model');


// TODO: Add conditional check for token role instructor here or middleware before adding a class

router.get('/', (req, res, next) => {
    Classes.getAllClasses()
        .then(classes => {
            res.json(classes);
        })
        .catch(next)
});


router.post('/', (req, res, next) => {
    Classes.addClass(req.body)
        .then(newClass => {
            res.status(201).json(newClass)
        })
        .catch(next);
});














module.exports = router;































