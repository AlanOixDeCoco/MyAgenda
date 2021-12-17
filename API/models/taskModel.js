const DataBase = require("../database/database");

module.exports = class ModelTask {

    static selectAll(limit, offset) {
        return new Promise((resolve, reject) => {
            let sql = "SELECT taskID, name, description, deadline, creation, agendaID, groupID, subjectID FROM Tasks LIMIT ? OFFSET ?";
            let value = [limit, offset];
            DataBase.con.query(sql, value, (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        })
    }

    static selectID(id) {
        return new Promise((resolve, reject) => {
            let sql = "SELECT name, description, deadline, creation, agendaID, groupID, subjectID FROM Tasks WHERE taskID = ?";
            let value = [id];
            DataBase.con.query(sql, value, (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        })
    }

    static selectGroupByID(id) {
        return new Promise((resolve, reject) => {
            let sql = "SELECT Groups.groupID, Groups.name, Groups.parentID, Groups.agendaID FROM Groups WHERE Groups.groupID = (SELECT Tasks.groupID FROM Tasks WHERE Tasks.taskID = ? )";
            let value = [id];
            DataBase.con.query(sql, value, (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        })
    }

    static insert(tasks) {
        // ADD description
        return new Promise((resolve, reject) => {
            let sql = "INSERT INTO Tasks (name, deadline, creation, agendaID, groupID) VALUES";
            let value = [];
            tasks.forEach(task => {
                sql += "(?,?,?,?,?), ";
                value.push(task.name);
                value.push(task.deadline);
                value.push(task.creation);
                value.push(task.agendaID);
                value.push(task.groupID);
            });
            sql = sql.slice(0, -2) + ";";
            DataBase.con.query(sql, value, (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        })
    }

    static update(tasks) {
        return new Promise((resolve, reject) => {
            let sql = "";
            let value = [];
            tasks.forEach(task => {
                sql += "UPDATE Tasks SET ";

                if (typeof task.name !== 'undefined') {
                    sql += "Tasks.name = ?, ";
                    value.push(task.name);
                }

                if (typeof task.description !== 'undefined') {
                    sql += "Tasks.description = ?, ";
                    value.push(task.description);
                }

                if (typeof task.deadline !== 'undefined') {
                    sql += "Tasks.deadline = ?, ";
                    value.push(task.deadline);
                }

                if (typeof task.creation !== 'undefined') {
                    sql += "Tasks.creation = ?, ";
                    value.push(task.creation);
                }

                if (typeof task.agendaID !== 'undefined') {
                    sql += "Tasks.agendaID = ?, ";
                    value.push(task.agendaID);
                }

                if (typeof task.groupID !== 'undefined') {
                    sql += "Tasks.groupID = ?, ";
                    value.push(task.groupID);
                }

                if (typeof task.subjectID !== 'undefined') {
                    sql += "Tasks.subjectID = ?, ";
                    value.push(task.subjectID);
                }

                sql = sql.slice(0, -2) + " WHERE Tasks.taskID = ?; ";
                value.push(task.taskID);
            })
            DataBase.con.query(sql, value, (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        })
    }

    static updateByID(id, task) {
        return new Promise((resolve, reject) => {
            let sql = "UPDATE Tasks SET ";
            let value = [];
            if (typeof task !== 'undefined') {

                if (typeof task.name !== 'undefined') {
                    sql += "Tasks.name = ?, ";
                    value.push(task.name);
                }

                if (typeof task.description !== 'undefined') {
                    sql += "Tasks.description = ?, ";
                    value.push(task.description);
                }

                if (typeof task.deadline !== 'undefined') {
                    sql += "Tasks.deadline = ?, ";
                    value.push(task.deadline);
                }

                if (typeof task.creation !== 'undefined') {
                    sql += "Tasks.creation = ?, ";
                    value.push(task.creation);
                }

                if (typeof task.agendaID !== 'undefined') {
                    sql += "Tasks.agendaID = ?, ";
                    value.push(task.agendaID);
                }

                if (typeof task.groupID !== 'undefined') {
                    sql += "Tasks.groupID = ?, ";
                    value.push(task.groupID);
                }

                if (typeof task.subjectID !== 'undefined') {
                    sql += "Tasks.subjectID = ?, ";
                    value.push(task.subjectID);
                }

                sql = sql.slice(0, -2) + " WHERE taskID = ?";
                value.push(id);
            }
            DataBase.con.query(sql, value, (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        })
    }

    static deleteByID(id) {
        return new Promise((resolve, reject) => {
            let sql = "DELETE FROM Tasks WHERE Tasks.taskID = ?";
            let value = [id];
            DataBase.con.query(sql, value, (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        })
    }
}