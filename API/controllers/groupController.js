const model = require("../models/groupModel");
const Error = require("../Errors/errors");

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
            .catch((err) => {
                console.error(err);
                Error.BadSyntax(res);
            });
    },

    getID: (req, res) => {
        model.selectID(req.params.groupID)
            .then((results) => {
                res.send(JSON.stringify(results));
            })
            .catch((err) => {
                console.error(err);
                Error.BadSyntax(res);
            });
    },

    getUser: (req, res) => {
        let limit = 50;
        let offset = 0;

        if (typeof (req.query.limit) == 'string' && Number(req.query.limit) >= 0 && Number(req.query.limit) <= 100)
            limit = Number(req.query.limit);

        if (typeof (req.query.offset) == 'string' && Number(req.query.offset) >= 0)
            offset = Number(req.query.offset);

        model.selectUserByID(req.params.groupID, limit, offset)
            .then((results) => {
                res.send(JSON.stringify(results));
            })
            .catch((err) => {
                console.error(err);
                Error.BadSyntax(res);
            });
    },

    getParent: (req, res) => {
        model.selectParentByID(req.params.groupID)
            .then((results) => {

            })
            .catch((err) => {
                console.error(err);
                Error.BadSyntax(res);
            });
    },

    getTask: (req, res) => {
        let limit = 50;
        let offset = 0;

        if (typeof (req.query.limit) == 'string' && Number(req.query.limit) >= 0 && Number(req.query.limit) <= 100)
            limit = Number(req.query.limit);

        if (typeof (req.query.offset) == 'string' && Number(req.query.offset) >= 0)
            offset = Number(req.query.offset);

        model.selectTasksByID(req.params.groupID, limit, offset)
            .then((results) => {

            })
            .catch((err) => {
                console.error(err);
                Error.BadSyntax(res);
            });
    },


    // POST
    post: (req, res) => {
        let groups = [];
        req.body.groups.forEach(group => {
            groups.push(group);
        });

        model.insert(groups)
            .then((results) => {
                res.send(JSON.stringify(results));
            })
            .catch((err) => {
                console.error(err);
                Error.BadSyntax(res);
            });
    },


    // PUT
    put: (req, res) => {
        let groups = [];
        req.body.groups.forEach(group => {
            if (typeof group.groupID !== 'undefined') {
                groups.push(group);
            }
        });

        model.update(groups)
            .then((results) => {
                res.send(JSON.stringify(results));
            })
            .catch((err) => {
                console.error(err);
                Error.BadSyntax(res);
            });
    },

    putByID: (req, res) => {
        model.updateByID(req.params.groupID, req.body.group)
            .then((results) => {
                res.send(JSON.stringify(results));
            })
            .catch((err) => {
                console.error(err);
                Error.BadSyntax(res);
            });
    },


    // DELETE
    delete: (req, res) => {
        model.deleteByID(req.params.groupID)
            .then((results) => {
                res.send(JSON.stringify(results));
            })
            .catch((err) => {
                console.error(err);
                Error.BadSyntax(res);
            });
    }
}