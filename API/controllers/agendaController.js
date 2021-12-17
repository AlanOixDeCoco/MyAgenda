const model = require("../models/agendaModel");
const Error = require("../Errors/errors");

module.exports = {

    // GET
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
        model.selectID(req.params.agendaID)
            .then((results) => {
                res.send(JSON.stringify(results));
            })
            .catch((err) => {
                console.error(err);
                Error.NotFound(res, "Agenda");
            });
    },

    getGroup: (req, res) => {
        model.selectGroupByID(req.params.agendaID)
            .then((results) => {
                res.send(JSON.stringify(results));
            })
            .catch((err) => {
                console.error(err);
                Error.NotFound(res, "Agenda");
            });
    },

    getTask: (req, res) => {
        let limit = 50;
        let offset = 0;

        if (typeof (req.query.limit) == 'string' && Number(req.query.limit) >= 0 && Number(req.query.limit) <= 100)
            limit = Number(req.query.limit);

        if (typeof (req.query.offset) == 'string' && Number(req.query.offset) >= 0)
            offset = Number(req.query.offset);

        model.selectTaskByID(req.params.agendaID, limit, offset)
            .then((results) => {
                res.send(JSON.stringify(results));
            })
            .catch((err) => {
                console.error(err);
                Error.BadSyntax(res);
            });
    },

    getSubject: (req, res) => {
        model.selectSubjectByID(req.params.agendaID)
            .then((results) => {
                res.send(JSON.stringify(results));
            })
            .catch((err) => {
                console.error(err);
                Error.BadSyntax(res);
            });
    },


    // POST
    post: (req, res) => {
        let agendas = [];
        req.body.agendas.forEach(agenda => {
            agendas.push(agenda);
        });

        model.insert(agendas)
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
        let agendas = [];
        req.body.agendas.forEach(agenda => {
            if (typeof agenda.agendaID !== 'undefined') {
                agendas.push(agenda);
            }
        });

        model.update(agendas)
            .then((results) => {
                res.send(JSON.stringify(results));
            })
            .catch((err) => {
                console.error(err);
                Error.BadSyntax(res);
            });
    },

    putByID: (req, res) => {
        model.updateByID(req.params.agendaID, req.body.agenda)
            .then((results) => {
                res.send(JSON.stringify(results));
            })
            .catch((err) => {
                console.error(err);
                Error.BadSyntax(res);
            });
    },

    putGroupByID: (req, res) => {
        let groups = [];
        req.body.groups.forEach(group => {
            if (typeof group.groupID !== 'undefined') {
                groups.push(group);
            }
        })

        model.updateGroupByID(req.params.agendaID, groups)
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
        model.deleteByID(req.params.agendaID)
            .then((results) => {
                res.send(JSON.stringify(results));
            })
            .catch((err) => {
                console.error(err);
                Error.BadSyntax(res);
            });
    }
}