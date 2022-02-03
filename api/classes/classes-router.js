const router = require('express').Router();
const Classes = require('./classes-model');
const { restricted, validateRole } = require('./classes-middleware');


router.get('/', (req, res, next) => {
    Classes.getAllClasses()
        .then(classes => {
            res.json(classes);
        })
        .catch(next);
});

router.get('/class/:class_id', (req, res, next) => {
    const { class_id } = req.body;
    Classes.getClassById(class_id)
        .then(resp => {
            res.json(resp);
        })
        .catch(next);
});


router.post('/', restricted, validateRole,(req, res, next) => {
    Classes.addClass(req.body)
        .then(newClass => {
            res.status(201).json(newClass);
        })
        .catch(next);
});

router.delete('/:class_id', (req, res, next) => {
    Classes.removeClass(req.params.class_id)
        .then(() => {
            res.json({message: 'Class Canceled'});
        })
        .catch(next);
});

router.get('/:client_id', (req, res, next) => {
    Classes.getClassById(req.params.client_id)
        .then(ress => {
            res.json(ress);
        })
        .catch(next);
});

router.put('/update', (req, res, next) => {
    Classes.updateClass(req.body)
        .then(update => {
            res.json(update);
        })
        .catch(next);
});

module.exports = router;































