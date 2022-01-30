const router = require('express').Router();
const Res = require('./reservations-model');
const { checkClassSize } = require('./reservations-middleware');


router.get('/:class_id', (req, res, next) => {
    const { class_id } = req.params

    Res.getResByClassId(class_id)
        .then(classRes => {
            res.json(classRes)
        })
        .catch(next);
});

router.post('/', checkClassSize, (req, res, next) => {
    Res.addRes(req.body)
        .then(newRes => {
            res.status(201).json({
                message: `Your spot has been reserved!`,
                res: newRes
            })
        })
        .catch(next)
})













module.exports = router;






























