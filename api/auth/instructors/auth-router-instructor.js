const router = require('express').Router();
const bcrypt = require('bcryptjs');
const Instructors = require('./auth-model-instructor');
const { checkInstLogin, checkInstBody, checkInstExist } = require('./auth-middleware-instructor');
const  instructorMakeToken = require('../make-token/instructorMakeToken');


router.get('/', (req, res, next) => {
    Instructors.getAllInstructors()
        .then(instructors => {
            res.json(instructors);
        })
        .catch(next);
});

router.post('/register', checkInstBody, (req, res, next) => {
    let user = req.body;
    user.password = bcrypt.hashSync(user.password, 8);

    Instructors.insertInstructor(user)
        .then(newInst => {
            res.status(201).json(newInst);
        })
        .catch(next);
});

router.post('/login', checkInstBody,  checkInstLogin, (req, res, next) => {
    let { password, instructor_name } = req.body;

    if(bcrypt.compareSync(password, req.instructor.password)) {
        const token = instructorMakeToken(req.instructor);
        res.json({
            message: `Ready to make people sweat, ${instructor_name}`,
            token
        })
    }
});


router.delete('/:instructor_id', checkInstExist,(req, res, next) => {
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




































