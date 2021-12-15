const model = require("../models/authModel");

module.exports = {

    register: (req, res) => {
        model.register(req.body.user)
            .then((res) => {

            })
            .catch((err) => console.error(err));
    },

    login: (req, res) => {
        model.login(req.body.user)
            .then((res) => {

            })
            .catch((err) => console.error(err));
    }
}