const model = require("../models/searchModel");

module.exports = {

    search: (req, res) => {
        let search = "";

        if (typeof (req.query.search) == 'string')
            search = req.query.search;

        model.selectSearch(search, limit, offset)
            .then((res) => {

            })
            .catch((err) => console.error(err));
    },
}