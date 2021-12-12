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

    getID: (req, res) => {
        model.selectID(req.params.userID)
            .then((res) => {

            })
            .catch((err) => console.error(err));
    },

    getGroup: (req, res) => {
        let limit = 50;
        let offset = 0;

        if (typeof (req.query.limit) == 'string' && Number(req.query.limit) >= 0 && Number(req.query.limit) <= 100)
            limit = Number(req.query.limit);

        if (typeof (req.query.offset) == 'string' && Number(req.query.offset) >= 0)
            offset = Number(req.query.offset);

        model.selectGroupByID(req.params.userID, limit, offset)
            .then((res) => {

            })
            .catch((err) => console.error(err));
    },


    // POST
    post: (req, res) => {
        let users = [];
        req.body.users.forEach(user => {
            users.push(user);
        });

        model.insert(users)
            .then((res) => {

            })
            .catch((err) => console.error(err));
    },


    //PUT
    put: (req, res) => {
        let users = [];
        req.body.users.forEach(user => {
            if (typeof user.id !== 'undefined') {
                users.push(user);
            }
        });

        model.update(users)
            .then((res) => {

            })
            .catch((err) => console.error(err));
    },

    putByID: (req, res) => {
        model.updateByID(req.params.userID, req.body.user)
            .then((res) => {

            })
            .catch((err) => console.error(err));
    },

    putGroupByID: (req, res) => {
        let groups = [];
        req.body.groups.forEach(group => {
            if (typeof group.id !== 'undefined') {
                groups.push(group);
            }
        })

        model.updateGroupByID(req.params.userID, groups)
            .then((res) => {

            })
            .catch((err) => console.error(err));
    },


    // DELETE
    delete: (req, res) => {
        model.deleteByID(req.params.userID)
            .then((res) => {

            })
            .catch((err) => console.error(err));
    }
}