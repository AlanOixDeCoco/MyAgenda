const model = require("../models/agendaModel");

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
        model.selectID(req.params.agendaID)
            .then((res) => {

            })
            .catch((err) => console.error(err));
    },

    getGroup: (req, res) => {
        model.selectGroupByID(req.params.agendaID)
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

        model.selectTaskByID(req.params.agendaID, limit, offset)
            .then((res) => {

            })
            .catch((err) => console.error(err));
    },

    getSubject: (req, res) => {
        model.selectSubjectByID(req.params.agendaID)
            .then((res) => {

            })
            .catch((err) => console.error(err));
    },


    // POST
    post: (req, res) => {
        let agendas = [];
        req.body.agendas.forEach(agenda => {
            agendas.push(agenda);
        });

        model.insert(agendas)
            .then((res) => {

            })
            .catch((err) => console.error(err));
    },


    // PUT
    put: (req, res) => {
        let agendas = [];
        req.body.agendas.forEach(agenda => {
            if (typeof agenda.id !== 'undefined') {
                agendas.push(agenda);
            }
        });

        model.update(agendas)
            .then((res) => {

            })
            .catch((err) => console.error(err));
    },

    putByID: (req, res) => {
        model.updateByID(req.params.agendaID, req.body.agenda)
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

        model.updateGroupByID(req.params.agendaID, groups)
            .then((res) => {

            })
            .catch((err) => console.error(err));
    },


    // DELETE
    delete: (req, res) => {
        model.deleteByID(req.params.agendaID)
            .then((res) => {

            })
            .catch((err) => console.error(err));
    }
}