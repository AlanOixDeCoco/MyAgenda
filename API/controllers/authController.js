const config = require("../database/config.json")
const model = require("../models/authModel");
const jwt = require('jsonwebtoken');
const Error = require('../Errors/errors');

module.exports = {

    register: (req, res) => {
        model.register(req.body.user)
            .then((results) => {
                res.send("Register Success");
            })
            .catch((err) => {
                console.error(err);
                Error.BadRequest(res);
            });
    },

    login: (req, res) => {
        model.login(req.body.user)
            .then((results) => {
                if (typeof results[0] !== 'undefined') {
                    let user = {
                        userID: results[0].userID,
                        username: results[0].username,
                        email: results[0].email
                    }
                    let accessToken = jwt.sign(user, config.token.access_token_secret);
                    res.send({ accessToken: accessToken });
                } else {
                    Error.Unauthorized(res);
                }
            })
            .catch((err) => {
                console.error(err);
                Error.BadSyntax(res);
            });
    }
}