const model = require("../models/subjectModel");
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
        model.selectID(req.params.subjectID)
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

        model.selectTasksByID(req.params.subjectID, limit, offset)
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
        let subjects = [];
        req.body.subjects.forEach(subject => {
            subjects.push(subject);
        });

        model.insert(subjects)
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
        let subjects = [];
        req.body.subjects.forEach(subject => {
            if (typeof subject.subjectID !== 'undefined') {
                subjects.push(subject);
            }
        });

        model.update(subjects)
            .then((results) => {
                res.send(JSON.stringify(results));
            })
            .catch((err) => {
                console.error(err);
                Error.BadSyntax(res);
            });
    },

    putByID: (req, res) => {
        model.updateByID(req.params.subjectID, req.body.subject)
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
        model.deleteByID(req.params.subjectID)
            .then((results) => {
                res.send(JSON.stringify(results));
            })
            .catch((err) => {
                console.error(err);
                Error.BadSyntax(res);
            });
    }

}