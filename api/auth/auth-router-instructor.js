const router = require('express').Router();
const bcrypt = require('bcryptjs');
const makeToken = require('./makeToken');
const Instructors = require('./auth-model-instructor')


router.get('/', (req, res, next) => {
    Instructors.getAllInstructors()
        .then(instructors => {
            res.json(instructors);
        })
        .catch(next)

})

router.post('/register', (req, res, next) => {
    let user = req.body;
    user.password = bcrypt.hashSync(user.password, 8);
    console.log(user)

    Instructors.insertInstructor(user)
        .then(newInst => {
            res.status(201).json(newInst)
        })
        .catch(next);
});

router.delete('/:instructor_id', (req, res, next) => {
    const { instructor_id } = req.params

    Instructors.removeInstructor(instructor_id)
        .then(() => {
            res.json({
                message: `Account was closed. Good bye`
            })
        })
        .catch(next);
});






module.exports = router;




































