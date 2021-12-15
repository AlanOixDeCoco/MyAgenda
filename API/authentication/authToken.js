const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
    authToken: (req, res, next) => {
        const authHeader = req.header('Authorization');
        const token = authHeader && authHeader.split(' ')[1];
        if (token == null) res.sendStatus(401);
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) {
                console.error(err);
                res.sendStatus(403);
            }
            req.user = user;
            next();
        })
    }
}