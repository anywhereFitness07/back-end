const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../../configs');


const clientMakeToken = user => {
    const payload = {
        subject: user.client_id,
        client_name: user.client_name,
        role: user.role
    };
    const options = {
        expiresIn: '1d'
    };
    return jwt.sign(payload, JWT_SECRET, options)
};

module.exports = {
    clientMakeToken,
};











































