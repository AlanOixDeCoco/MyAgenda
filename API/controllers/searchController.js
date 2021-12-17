const model = require("../models/searchModel");

module.exports = {

    search: (req, res) => {
        let search = "";

        let limit = 50;
        let offset = 0;

        let reponse = {};

        if (typeof (req.query.limit) == 'string' && Number(req.query.limit) >= 0 && Number(req.query.limit) <= 100)
            limit = Number(req.query.limit);

        if (typeof (req.query.offset) == 'string' && Number(req.query.offset) >= 0)
            offset = Number(req.query.offset);

        if (typeof (req.query.search) == 'string')
            search = req.query.search;

        model.selectSearchAgendas(search, limit, offset)
            .then((results) => {
                reponse.agendas = results;
            })
            .catch((err) => console.error(err));

        model.selectSearchGroups(search, limit, offset)
            .then((results) => {
                reponse.groups = results;
            })
            .catch((err) => console.error(err));

        model.selectSearchSubjects(search, limit, offset)
            .then((results) => {
                reponse.subjects = results;
            })
            .catch((err) => console.error(err));

        model.selectSearchTasks(search, limit, offset)
            .then((results) => {
                reponse.tasks = results;
            })
            .catch((err) => console.error(err));

        model.selectSearchUsers(search, limit, offset)
            .then((results) => {
                reponse.users = results;
                res.send(JSON.stringify(reponse));
            })
            .catch((err) => console.error(err));
    },
}