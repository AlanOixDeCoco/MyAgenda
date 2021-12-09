const model = require("../models/userModel");

module.exports = {

    //GET
    get: (req, res) => {
        let limit = 50;
        let offset = 0;

        if (typeof (req.query.limit) == 'string' && Number(req.query.limit) >= 0 && Number(req.query.limit) <= 100)
            limit = Number(req.query.limit);

        if (typeof (req.query.offset) == 'string' && Number(req.query.offset) >= 0)
            offset = Number(req.query.offset);

        model.selectAll(limit, offset)
            .then((res) => {

            })
            .catch((err) => console.error(err));
    },

    // POST
    post: (req, res) => {

    },

    //PUT
    put: (req, res) => {

    },

    // DELETE
    delete: (req, res) => {

    }
}