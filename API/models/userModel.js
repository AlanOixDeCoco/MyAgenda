const DataBase = require("../database/database");

module.exports = class ModelUser {

    static selectAll(limit, offset) {
        return new Promise((resolve, reject) => {
            let sql = "SELECT userID, username, email, link_img, setting FROM Users LIMIT ? OFFSET ?";
            let value = [limit, offset];
            DataBase.con.query(sql, value, (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        })
    }

    static selectID(id) {
        return new Promise((resolve, reject) => {
            let sql = "SELECT username, email, link_img, setting FROM Users WHERE userID = ?";
            let value = [id];
            DataBase.con.query(sql, value, (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        })
    }

    static selectGroupByID(id, limit, offset) {
        return new Promise((resolve, reject) => {
            let sql = "SELECT Groups.groupID, Groups.name FROM Users INNER JOIN GroupsUsers ON Users.userID = GroupsUsers.userID INNER JOIN Groups ON GroupsUsers.groupID = Groups.groupID WHERE Users.userID = ? LIMIT ? OFFSET ?";
            let value = [id, limit, offset];
            DataBase.con.query(sql, value, (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        })
    }

    static selectTaskByID(id, limit, offset) {
        return new Promise((resolve, reject) => {
            let sql = "";
            let value = [];
            DataBase.con.query(sql, value, (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        })
    }

    static update(users) {
        return new Promise((resolve, reject) => {
            let sql = "";
            users.forEach(user => {
                let query = "UPDATE Users SET "
                let value = [];
                if (typeof user.username !== 'undefined') {
                    query += "username = ? ";
                    value.push(user.username);
                }
                if (typeof user.password !== 'undefined') {
                    query += "password = ? ";
                    value.push(user.password);
                }
                if (typeof user.email !== 'undefined') {
                    query += "email = ? ";
                    value.push(user.email);
                }
                if (typeof user.status !== 'undefined') {
                    query += "status = ? ";
                    value.push(user.status);
                }
                if (typeof user.img_link !== 'undefined') {
                    query += "img_link = ? ";
                    value.push(user.img_link);
                }
                if (typeof user.color !== 'undefined') {
                    query += "color = ? ";
                    value.push(user.color);
                }
                query += "WHERE userID = ?;";
                value.push(user.userID);

                sql += DataBase.con.format(query, value);
            });
            DataBase.con.query(sql, (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        })
    }

    static updateByID(id, user) {
        return new Promise((resolve, reject) => {
            if (typeof user !== 'undefined') {
                let sql = "UPDATE Users SET "
                let value = [];

                if (typeof user.username !== 'undefined') {
                    sql += "username = ? ";
                    value.push(user.username);
                }
                if (typeof user.password !== 'undefined') {
                    sql += "password = ? ";
                    value.push(user.password);
                }
                if (typeof user.email !== 'undefined') {
                    sql += "email = ? ";
                    value.push(user.email);
                }
                if (typeof user.status !== 'undefined') {
                    sql += "status = ? ";
                    value.push(user.status);
                }
                if (typeof user.img_link !== 'undefined') {
                    sql += "img_link = ? ";
                    value.push(user.img_link);
                }
                if (typeof user.color !== 'undefined') {
                    sql += "color = ? ";
                    value.push(user.color);
                }
                sql += "WHERE userID = ?;";
                value.push(id);

                DataBase.con.query(sql, value, (err, res) => {
                    if (err) reject(err);
                    resolve(res);
                })
            } else
                reject(new Error);
        })
    }

    static updateGroupByID(id, groups) {
        return new Promise((resolve, reject) => {
            var sql = "INSERT INTO GroupsUsers (userID, groupID) VALUES";
            let value = [];
            groups.forEach(group => {
                sql += "(?,?), ";
                value.push(id);
                value.push(group.groupID);
            });
            sql = sql.slice(0, -2) + ";";
            DataBase.con.query(sql, value, (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        })
    }

    static deleteGroupsByID(id, groups) {
        return new Promise((resolve, reject) => {
            let sql = "DELETE FROM GroupsUsers WHERE userID = ? AND groupID IN (";
            let value = [id];
            groups.forEach(group => {
                value.push(group.groupID);
                sql += "?, "
            });
            sql = sql.slice(0, -2) + ")";
            console.log(sql);
            DataBase.con.query(sql, value, (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        })
    }

    static deleteByID(id) {
        return new Promise((resolve, reject) => {
            let sql = "DELETE FROM Users WHERE userID = ?";
            let value = [id];
            DataBase.con.query(sql, value, (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        })
    }
}