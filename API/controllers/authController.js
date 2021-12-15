require('dotenv').config();
const model = require("../models/authModel");
const jwt = require('jsonwebtoken');

module.exports = {

    register: (req, res) => {
        model.register(req.body.user)
            .then((results) => {
                res.send("Register Success");
            })
            .catch((err) => {
                console.error(err);
                res.sendStatus(403);
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
                } else
                    res.sendStatus(401);
            })
            .catch((err) => res.sendStatus(403));
    }
}