const DataBase = require("../database/database");

module.exports = class ModelUser {

    static selectAll(limit, offset) {
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