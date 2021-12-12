const model = require("../models/subjectModel");

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
        model.selectID(req.params.subjectID)
            .then((res) => {

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

        model.selectTasksByID(req.params.subjectID, limit, offset)
            .then((res) => {

            })
            .catch((err) => console.error(err));
    },


    // POST
    post: (req, res) => {
        let subjects = [];
        req.body.subjects.forEach(subject => {
            subjects.push(subject);
        });

        model.insert(subjects)
            .then((res) => {

            })
            .catch((err) => console.error(err));
    },


    // PUT
    put: (req, res) => {
        let subjects = [];
        req.body.subjects.forEach(subject => {
            if (typeof subject.id !== 'undefined') {
                subjects.push(subject);
            }
        });

        model.update(subjects)
            .then((res) => {

            })
            .catch((err) => console.error(err));
    },

    putByID: (req, res) => {
        model.updateByID(req.params.subjectID, req.body.subject)
            .then((res) => {

            })
            .catch((err) => console.error(err));
    },


    // DELETE
    delete: (req, res) => {
        model.deleteByID(req.params.subjectID)
            .then((res) => {

            })
            .catch((err) => console.error(err));
    }

}