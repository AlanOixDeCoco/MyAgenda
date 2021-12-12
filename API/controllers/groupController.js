const model = require("../models/groupModel");

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
            .then((res) => {

            })
            .catch((err) => console.error(err));
    },

    getID: (req, res) => {
        model.selectID(req.params.groupID)
            .then((res) => {

            })
            .catch((err) => console.error(err));
    },

    getUser: (req, res) => {
        let limit = 50;
        let offset = 0;

        if (typeof (req.query.limit) == 'string' && Number(req.query.limit) >= 0 && Number(req.query.limit) <= 100)
            limit = Number(req.query.limit);

        if (typeof (req.query.offset) == 'string' && Number(req.query.offset) >= 0)
            offset = Number(req.query.offset);

        model.selectUserByID(req.params.groupID, limit, offset)
            .then((res) => {

            })
            .catch((err) => console.error(err));
    },

    getParent: (req, res) => {
        model.selectParentByID(req.params.groupID)
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

        model.selectTasksByID(req.params.groupID, limit, offset)
            .then((res) => {

            })
            .catch((err) => console.error(err));
    },


    // POST
    post: (req, res) => {
        let groups = [];
        req.body.groups.forEach(group => {
            groups.push(group);
        });

        model.insert(groups)
            .then((res) => {

            })
            .catch((err) => console.error(err));
    },


    // PUT
    put: (req, res) => {
        let groups = [];
        req.body.groups.forEach(group => {
            if (typeof group.id !== 'undefined') {
                groups.push(group);
            }
        });

        model.update(groups)
            .then((res) => {

            })
            .catch((err) => console.error(err));
    },

    putByID: (req, res) => {
        model.updateByID(req.params.groupID, req.body.group)
            .then((res) => {

            })
            .catch((err) => console.error(err));
    },


    // DELETE
    delete: (req, res) => {
        model.deleteByID(req.params.groupID)
            .then((res) => {

            })
            .catch((err) => console.error(err));
    }
}