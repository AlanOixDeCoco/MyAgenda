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
            .then((results) => {
                res.send(JSON.stringify(results));
            })
            .catch((err) => console.error(err));
    },

    getID: (req, res) => {
        model.selectID(req.params.userID)
            .then((results) => {
                res.send(JSON.stringify(results));
            })
            .catch((err) => console.error(err));
    },

    getLogin: (req, res) => {
        model.selectID(req.user.userID)
            .then((results) => {
                res.send(JSON.stringify(results));
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

        model.selectGroupByID(req.user.userID, limit, offset)
            .then((results) => {
                res.send(JSON.stringify(results));
            })
            .catch((err) => console.error(err));
    },

    getTask: (req, res) => {
        let limit = 50;
        let offset = 0;

        if (typeof (req.query.limit) == 'string' && Number(req.query.limit) >= 0 && Number(req.query.limit) <= 100)
            limit = Number(req.query.limit);

        if (typeof (req.query.offset) == 'string' && Number(req.query.offset) >= 0)
            offset = Number(req.query.offset);

        model.selectTaskByID(req.user.userID, limit, offset)
            .then((results) => {
                res.send(JSON.stringify(results));
            })
            .catch((err) => console.error(err));
    },

    // POST
    postGroup: (req, res) => {
        let groups = [];
        req.body.groups.forEach(group => {
            if (typeof group.groupID !== 'undefined') {
                groups.push(group);
            }
        })

        model.updateGroupByID(req.user.userID, groups)
            .then((results) => {
                res.send(JSON.stringify(results));
            })
            .catch((err) => console.error(err));
    },

    put: (req, res) => {
        model.updateByID(req.user.userID, req.body.user)
            .then((results) => {
                res.send(JSON.stringify(results));
            })
            .catch((err) => {
                res.sendStatus(403)
                console.error(err)
            });
    },

    // DELETE
    deleteGroup: (req, res) => {
        model.deleteGroupsByID(req.user.userID, req.body.groups)
            .then((results) => {
                res.send(JSON.stringify(results));
            })
            .catch((err) => console.error(err));
    },

    delete: (req, res) => {
        model.deleteByID(req.user.userID)
            .then((results) => {
                res.send(JSON.stringify(results));
            })
            .catch((err) => console.error(err));
    }
}