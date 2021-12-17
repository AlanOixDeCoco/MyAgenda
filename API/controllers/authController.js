require('dotenv').config();
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
                if (typeof results[0].userID !== 'undefined') {
                    let user = {
                        userID: results[0].userID,
                        username: results[0].username,
                        email: results[0].email
                    }
                    let accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
                    res.send({ accessToken: accessToken });
                } else {
                    console.error(err);
                    Error.NotFound(res, "User");
                }
            })
            .catch((err) => {
                console.error(err);
                Error.BadSyntax(res);
            });
    }
}