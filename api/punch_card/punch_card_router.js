const router = require('express').Router();
const Card = require('./punch_card_model');


router.get('/', (req, res, next) => {
    Card.getAll()
        .then(cards => {
            res.json(cards)
        })
        .catch(next)


});

router.post('/', (req, res, next) => {
    Card.addCard(req.body)
        .then(card => {
            res.status(201).json(card)
        })
        .catch(next)

});


router.delete('/:pc_id', (req, res, next) => {
    const { pc_id } = req.params;
    Card.deleteCard(pc_id)
        .then(() => {
            res.json({
                message: `Punch Card deleted`
            })
        })
        .catch(next)
})











module.exports = router;































