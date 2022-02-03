const db = require('../../data/db-config');

const checkInstLogin = async (req, res, next) => {
    const instructor_name = req.body.instructor_name;
    try {
        const instructor = await db('instructors').where({instructor_name}).first();
        if(instructor) {
            req.instructor = instructor;
            next();
        } else {
            next({status: 404, message: `Invalid Credentials`});
        }
    }
    catch (err) {
        next(err);
    }
};

const checkInstBody = (req, res, next) => {
    const { instructor_name, password } = req.body;
    if(!instructor_name || !password) {
        next({status: 401,
            message: `Instructor name and password Required`
        });
    } else{ next() }
};

const checkInstExist = async (req, res, next) => {
    const instructor = await db('instructors')
        .where('instructor_id', req.params.instructor_id)
        .first();

    if(instructor) {
        next();
    } else {
        next({
            status: 404,
            message: `Instructor not found`
        });
    }
};

module.exports = {
    checkInstLogin,
    checkInstBody,
    checkInstExist,
};














































