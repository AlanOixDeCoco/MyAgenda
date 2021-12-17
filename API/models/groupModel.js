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

    static selectTasksByID(id, limit, offset) {
        return new Promise((resolve, reject) => {
            let sql = "SELECT DISTINCT Tasks.* FROM Tasks WHERE Tasks.groupID = ? LIMIT ? OFFSET ?";
            let value = [id, limit, offset];
            DataBase.con.query(sql, value, (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        })
    }

    static insert(groups) {
        return new Promise((resolve, reject) => {
            let sql = "INSERT INTO Groups (name, parentID, agendaID) VALUES";
            let value = [];
            groups.forEach(group => {
                sql += "(?,?,?), ";
                value.push(group.name);
                value.push(group.parentID);
                value.push(group.agendaID);
            });
            sql = sql.slice(0, -2) + ";";
            DataBase.con.query(sql, value, (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        })
    }

    static update(groups) {
        return new Promise((resolve, reject) => {
            let sql = "";
            groups.forEach(group => {
                let query = "UPDATE Groups SET ";
                let value = [];
                if (typeof group.name !== 'undefined') {
                    query += "Groups.name = ?, ";
                    value.push(group.name);
                }
                if (typeof group.parentID !== 'undefined') {
                    query += "Groups.parentID = ?, ";
                    value.push(group.parentID);
                }
                if (typeof group.agendaID !== 'undefined') {
                    query += "Groups.agendaID = ?, ";
                    value.push(group.agendaID);
                }

                query = query.slice(0, -2) + " WHERE Groups.groupID = ?;";
                value.push(group.groupID);

                sql += DataBase.con.format(query, value);
                value = []
            })
            DataBase.con.query(sql, (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        })
    }

    static updateByID(id, group) {
        return new Promise((resolve, reject) => {
            if (typeof group !== 'undefined') {
                let sql = "UPDATE Groups SET "
                let value = [];

                if (typeof group.name !== 'undefined') {
                    sql += "name = ?, ";
                    value.push(group.name);
                }
                if (typeof group.parentID !== 'undefined') {
                    sql += "parentID = ?, ";
                    value.push(group.parentID);
                }
                if (typeof group.agendaID !== 'undefined') {
                    sql += "agendaID = ?, ";
                    value.push(group.agendaID);
                }
                sql = sql.slice(0, -2) + " WHERE groupID = ?";
                value.push(id);
                DataBase.con.query(sql, value, (err, res) => {
                    if (err) reject(err);
                    resolve(res);
                })
            } else
                reject(new Error);
        })
    }

    static deleteByID(id) {
        return new Promise((resolve, reject) => {
            let sql = "DELETE FROM Groups WHERE Groups.groupID = ?";
            let value = [id];
            DataBase.con.query(sql, value, (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        })
    }
}