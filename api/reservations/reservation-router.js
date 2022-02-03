const router = require('express').Router();
const Res = require('./reservations-model');
const { checkClassSize } = require('./reservations-middleware');
const db = require('../data/db-config');

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
            const client_id = req.body.client_id;
            res.reservation = {...newRes, client_id};
            res.status(201).json({
                message: `Your spot has been reserved!`,
                res: {...newRes, client_id}
            })
        })
        .catch(next);
        // .then( async () => {
        //     const resv = res.reservation;
        //     const client_id = await db('client_punch_card AS cpc')
        //         .join('client_reservations AS cr', 'cr.cr_id', 'cpc.cr_id')
        //         .select('cpc.client_id')
        //         .where('cpc.client_id', resv.client_id)
        //         .first()
        //     const class_id = await db('client_punch_card AS cpc')
        //         .join('classes AS cl', 'cpc.class_id', 'cl.class_id')
        //         .select('cpc.class_id')
        //         .where('cpc.class_id', resv.class_id)
        //         .first()
        //
        //         await db('client_punch_card')
        //             .where('class_id', resv.class_id)
        //             .increment('current_class_num', 1)
        // })

});

router.put('/:id', (req,res, next) => {
    Res.cancelRes(req.params.id)
        .then(updatedClass => {
            res.json(updatedClass);
        })
        .catch(next);
});

router.get('/', (req, res, next) => {
    Res.punchCard()
        .then(card => {
            res.json(card);
        })
        .catch(next);
});

router.get('/clients/:client_id', (req, res, next) => {
    Res.getResByClientId(req.params.client_id)
        .then(resv => {
            res.json(resv);
        })
        .catch(err => {
            console.error(err);
        });
});

module.exports = router;






































