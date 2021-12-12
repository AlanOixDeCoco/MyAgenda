const model = require("../models/taskModel");

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
            .then((res) => {

            })
            .catch((err) => console.error(err));
    },

    getID: (req, res) => {
        model.selectID(req.params.taskID)
            .then((res) => {

            })
            .catch((err) => console.error(err));
    },

    getGroup: (req, res) => {
        model.selectGroupByID(req.params.taskID)
            .then((res) => {

            })
            .catch((err) => console.error(err));
    },


    // POST
    post: (req, res) => {
        let tasks = [];
        req.body.tasks.forEach(task => {
            tasks.push(task);
        });

        model.insert(tasks)
            .then((res) => {

            })
            .catch((err) => console.error(err));
    },


    // PUT
    put: (req, res) => {
        let tasks = [];
        req.body.tasks.forEach(task => {
            if (typeof task.id !== 'undefined') {
                tasks.push(task);
            }
        });

        model.update(tasks)
            .then((res) => {

            })
            .catch((err) => console.error(err));
    },

    putByID: (req, res) => {
        model.updateByID(req.params.taskID, req.body.task)
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

        model.updateGroupByID(req.params.taskID, groups)
            .then((res) => {

            })
            .catch((err) => console.error(err));
    },


    // DELETE
    delete: (req, res) => {
        model.deleteByID(req.params.taskID)
            .then((res) => {

            })
            .catch((err) => console.error(err));
    }
}