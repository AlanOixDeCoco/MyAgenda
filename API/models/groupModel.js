const DataBase = require("../database/database");

module.exports = class ModelGroup {

    static selectAll(limit, offset) {
        return new Promise((resolve, reject) => {
            let sql = "SELECT groupID, name, parentID, agendaID FROM Groups LIMIT ? OFFSET ?";
            let value = [limit, offset];
            DataBase.con.query(sql, value, (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        })
    }

    static selectID(id) {
        return new Promise((resolve, reject) => {
            let sql = "SELECT name, parentID, agendaID FROM Groups WHERE groupID = ?";
            let value = [id];
            DataBase.con.query(sql, value, (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        })
    }

    static selectUserByID(id, limit, offset) {
        return new Promise((resolve, reject) => {
            let sql = "SELECT Users.userID, Users.username, Users.email, Users.link_img FROM Users INNER JOIN GroupsUsers ON Users.userID = GroupsUsers.userID INNER JOIN Groups ON GroupsUsers.groupID = Groups.groupID WHERE Groups.groupID = ? LIMIT ? OFFSET ?";
            let value = [id, limit, offset];
            DataBase.con.query(sql, value, (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        })
    }

    static selectParentByID(id) {
        return new Promise((resolve, reject) => {
            let sql = "";
            let value = [];
            DataBase.con.query(sql, value, (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        })
    }

    static selectTasksByID(id, limit, offset) {
        return new Promise((resolve, reject) => {
            let sql = "";
            let value = [];
            DataBase.con.query(sql, value, (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        })
    }

    static insert(groups) {
        return new Promise((resolve, reject) => {
            let sql = "";
            let value = [];
            DataBase.con.query(sql, value, (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        })
    }

    static update(groups) {
        return new Promise((resolve, reject) => {
            let sql = "";
            let value = [];
            DataBase.con.query(sql, value, (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        })
    }

    static updateByID(id, group) {
        return new Promise((resolve, reject) => {
            let sql = "";
            let value = [];
            DataBase.con.query(sql, value, (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        })
    }

    static deleteByID(id) {
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