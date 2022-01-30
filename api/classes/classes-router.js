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

router.delete('/:class_id', (req, res, next) => {
    Classes.removeClass(req.params.class_id)
        .then(() => {
            res.json({message: 'Class Canceled.'})
        })
        .catch(next)
});


module.exports = router;































