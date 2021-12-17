const DataBase = require("../database/database");

module.exports = class ModelSearch {

    static selectSearchTasks(search, limit, offset) {
        return new Promise((resolve, reject) => {
            search = "%" + search + "%";
            let sql = "SELECT * FROM Tasks WHERE name LIKE ? LIMIT ? OFFSET ?";
            let value = [search, limit, offset];
            DataBase.con.query(sql, value, (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        })
    }

    static selectSearchAgendas(search, limit, offset) {
        return new Promise((resolve, reject) => {
            search = "%" + search + "%";
            let sql = "SELECT * FROM Agendas WHERE name LIKE ? LIMIT ? OFFSET ?";
            let value = [search, limit, offset];
            DataBase.con.query(sql, value, (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        })
    }

    static selectSearchGroups(search, limit, offset) {
        return new Promise((resolve, reject) => {
            search = "%" + search + "%";
            let sql = "SELECT * FROM Groups WHERE name LIKE ? LIMIT ? OFFSET ?";
            let value = [search, limit, offset];
            DataBase.con.query(sql, value, (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        })
    }

    static selectSearchSubjects(search, limit, offset) {
        return new Promise((resolve, reject) => {
            search = "%" + search + "%";
            let sql = "SELECT * FROM Subjects WHERE name LIKE ? LIMIT ? OFFSET ?";
            let value = [search, limit, offset];
            DataBase.con.query(sql, value, (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        })
    }

    static selectSearchUsers(search, limit, offset) {
        return new Promise((resolve, reject) => {
            search = "%" + search + "%";
            let sql = "SELECT userID,username, link_img FROM Users WHERE username LIKE ? LIMIT ? OFFSET ?";
            let value = [search, limit, offset];
            DataBase.con.query(sql, value, (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        })
    }
}