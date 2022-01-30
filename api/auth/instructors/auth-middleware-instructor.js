const db = require('../../data/db-config');

const checkInstLogin = async (req, res, next) => {
    const instructor_name = req.body;
    try {
        const instructor = await db('instructors').where({instructor_name}).first();
        if(instructor) {
            req.instructor = instructor;
            next();
        } else {
            next({status: 404, message: `Invalid Credentials`})
        }
    }
    catch (err) {
        next(err)
    }
};

module.exports = {
    checkInstLogin,

};














































