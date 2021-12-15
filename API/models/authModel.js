const DataBase = require("../database/database");

module.exports = class ModelAuth {

    static register(user) {
        return new Promise((resolve, reject) => {
            let sql = "INSERT INTO Users (username, email, password, setting) VALUES (?,?,?,'{}')";
            let value = [user.username, user.email, user.password];
            DataBase.con.query(sql, value, (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        })
    }

    static login(user) {
        return new Promise((resolve, reject) => {
            let sql = "SELECT userID, username, email FROM Users WHERE email = ? AND password = ?";
            let value = [user.email, user.password];
            DataBase.con.query(sql, value, (err, res) => {
                if (err) reject(err);
                resolve(res)
            })
        })
    }
}