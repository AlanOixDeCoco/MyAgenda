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
                if (typeof results[0] !== 'undefined')
                    res.send(JSON.stringify(results));
                else
                    res.sendStatus(403);
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

        console.log("selectGroupByID ", "user :" + req.user.userID, "limit :" + limit, "offset :" + offset);

        model.selectGroupByID(req.user.userID, limit, offset)
            .then((results) => {
                console.log("\t Success !");
                res.send(JSON.stringify(results));
            })
            .catch((err) => {
                console.log("\t Failed !");
                console.error(err)
            });
    },

    getTask: (req, res) => {
        let limit = 50;
        let offset = 0;

        if (typeof (req.query.limit) == 'string' && Number(req.query.limit) >= 0 && Number(req.query.limit) <= 100)
            limit = Number(req.query.limit);

        if (typeof (req.query.offset) == 'string' && Number(req.query.offset) >= 0)
            offset = Number(req.query.offset);

        console.log("selectTaskByID ", "user :" + req.user.userID, "limit :" + limit, "offset :" + offset);

        model.selectTaskByID(req.user.userID, limit, offset)
            .then((results) => {
                console.log("\t Success !");
                res.send(JSON.stringify(results));
            })
            .catch((err) => {
                console.log("\t Failed !");
                console.error(err)
            });
    },

    getAgenda: (req, res) => {
        let limit = 50;
        let offset = 0;

        if (typeof (req.query.limit) == 'string' && Number(req.query.limit) >= 0 && Number(req.query.limit) <= 100)
            limit = Number(req.query.limit);

        if (typeof (req.query.offset) == 'string' && Number(req.query.offset) >= 0)
            offset = Number(req.query.offset);

        console.log("selectAgendaByID ", "user :" + req.user.userID, "limit :" + limit, "offset :" + offset);

        model.selectAgendaByID(req.user.userID, limit, offset)
            .then((results) => {
                console.log("\t Success !");
                res.send(JSON.stringify(results));
            })
            .catch((err) => {
                console.log("\t Failed !");
                console.error(err)
            });
    },

    // POST
    postGroup: (req, res) => {
        let groups = [];
        req.body.groups.forEach(group => {
            if (typeof group.groupID !== 'undefined') {
                groups.push(group);
            }
        })

        console.log("updateGroupByID ", "user :" + req.user.userID);
        console.log("Groups :");
        console.log(JSON.stringify(groups));

        model.updateGroupByID(req.user.userID, groups)
            .then((results) => {
                console.log("\t Success !");
                res.send(JSON.stringify(results));
            })
            .catch((err) => {
                console.log("\t Failed !");
                console.error(err)
            });
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