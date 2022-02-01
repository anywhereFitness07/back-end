const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../configs');


const restricted = (req, res, next) => {
    const token = req.headers.authorization;
    console.log(token)
    if(!token) {
        next({status: 403, message: `token required`})
    }
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if(err) {
            next({status: 401, message: 'token invalid'});
        } else {
            req.decoded = decoded
            next()
        }
    })
};


const validateRole = (req, res, next) => {
    if(req.decoded.role === 'instructor') {
        next()
    } else {
        next({
            status: 401,
            message: `Must be an instructor to add or delete a class.`
        })
    }
}




module.exports = {
    restricted,
    validateRole,
}









































