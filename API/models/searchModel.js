const DataBase = require("../database/database");

module.exports = class ModelSearch {

    static selectSearch(search, limit, offset) {
        return new Promise((resolve, reject) => {
            let sql = "";
            let value = [];
            DataBase.con.query(sql, value, (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        })
    }
}