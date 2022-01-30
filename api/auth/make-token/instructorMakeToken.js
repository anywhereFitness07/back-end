const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../../configs');

const instructorMakeToken = user => {
    const payload = {
        subject: user.instructor_id,
        instructor_name: user.instructor_name,
        role: user.role
    };
    const options = {
        expiresIn: "1d",
    };
    return jwt.sign(payload, JWT_SECRET, options);

};


module.exports = instructorMakeToken;













































