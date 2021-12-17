const jwt = require('jsonwebtoken');
const config = require('../database/config.json');
const Error = require('../Errors/errors')

module.exports = {
    authToken: (req, res, next) => {
        const authHeader = req.header('Authorization');
        const token = authHeader && authHeader.split(' ')[1];
        if (token == null) {
            Error.BadSytax(res);
        }
        jwt.verify(token, config.token.access_token_secret, (err, user) => {
            if (err) {
                console.error(err);
                Error.Unauthorized(res);
            }
            req.user = user;
            next();
        })
    }
}

