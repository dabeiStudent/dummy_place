const jwt = require('jsonwebtoken');

const checkJWT = (req, res, next) => {
    let cookies = req.cookies;
    if (cookies.token) {
        next();
    } else {
        return res.status(401).json({ err: 'Not authenticated' });
    }
};


module.exports = { checkJWT };