const model = require("../models/taskModel");
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
        model.selectID(req.params.taskID)
            .then((results) => {
                res.send(JSON.stringify(results));
            })
            .catch((err) => {
                console.error(err);
                Error.NotFound(res, "Task");
            });
    },

    getGroup: (req, res) => {
        model.selectGroupByID(req.params.taskID)
            .then((results) => {
                res.send(JSON.stringify(results));
            })
            .catch((err) => {
                console.error(err);
                Error.NotFound(res, "Task");
            });
    },


    // POST
    post: (req, res) => {
        let tasks = [];
        req.body.tasks.forEach(task => {
            tasks.push(task);
        });

        model.insert(tasks)
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
        let tasks = [];
        req.body.tasks.forEach(task => {
            if (typeof task.taskID !== 'undefined') {
                tasks.push(task);
            }
        });

        model.update(tasks)
            .then((results) => {
                res.send(JSON.stringify(results));
            })
            .catch((err) => {
                console.error(err);
                Error.BadSyntax(res);
            });
    },

    putByID: (req, res) => {
        model.updateByID(req.params.taskID, req.body.task)
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
        model.deleteByID(req.params.taskID)
            .then((results) => {
                res.send(JSON.stringify(results));
            })
            .catch((err) => {
                console.error(err);
                Error.BadSyntax(res);
            });
    }
}