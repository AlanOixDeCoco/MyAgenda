const DataBase = require("../database/database");

module.exports = class ModelAgenda {

    static selectAll(limit, offset) {
        return new Promise((resolve, reject) => {
            let sql = "SELECT agendaID, name FROM Agendas LIMIT ? OFFSET ?";
            let value = [limit, offset];
            DataBase.con.query(sql, value, (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        })
    }

    static selectID(id) {
        return new Promise((resolve, reject) => {
            let sql = "SELECT name FROM Agendas WHERE agendaID = ?";
            let value = [id];
            DataBase.con.query(sql, value, (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        })
    }

    static selectGroupByID(id) {
        return new Promise((resolve, reject) => {
            let sql = "SELECT Groups.groupID, Groups.name, Groups.parentID FROM Groups WHERE Groups.agendaID = ?";
            let value = [id];
            DataBase.con.query(sql, value, (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        })
    }

    static selectTaskByID(id, limit, offset) {
        return new Promise((resolve, reject) => {
            let sql = "SELECT Tasks.taskID, Tasks.name, Tasks.description, Tasks.deadline, Tasks.creation, Tasks.groupID, subjectID FROM Tasks WHERE Tasks.agendaID = ? LIMIT ? OFFSET ?";
            let value = [id, limit, offset];
            DataBase.con.query(sql, value, (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        })
    }

    static selectSubjectByID(id) {
        return new Promise((resolve, reject) => {
            let sql = "SELECT Subjects.subjectID, Subjects.name FROM Subjects WHERE Subjects.agendaID = ?";
            let value = [id];
            DataBase.con.query(sql, value, (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        })
    }

    static insert(agendas) {
        return new Promise((resolve, reject) => {
            let sql = "INSERT INTO Agendas (name) VALUES";
            let value = [];
            agendas.forEach(agenda => {
                sql += "(?), ";
                value.push(agenda.name);
            });
            sql = sql.slice(0, -2) + ";";
            DataBase.con.query(sql, value, (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        })
    }

    static update(agendas) {
        return new Promise((resolve, reject) => {
            let sql = "";
            let value = [];
            agendas.forEach(agenda => {
                sql += "UPDATE Agendas SET ";

                if (typeof agenda.name !== 'undefined') {
                    sql += "Agendas.name = ? ";
                    value.push(agenda.name);
                }

                sql += "WHERE Agendas.agendaID = ?; ";
                value.push(agenda.agendaID);
            })
            DataBase.con.query(sql, value, (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        })
    }

    static updateByID(id, agenda) {
        return new Promise((resolve, reject) => {
            let sql = "UPDATE Agendas SET "
            let value = [];
            if (typeof agenda !== 'undefined') {
                if (typeof agenda.name !== 'undefined') {
                    sql += "name = ?";
                    value.push(agenda.name);
                }
                sql += " WHERE agendaID = ?";
                value.push(id);
            }
            DataBase.con.query(sql, value, (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        })
    }

    static updateGroupByID(id, groups) {
        return new Promise((resolve, reject) => {
            let sql = "";
            let value = [];

            groups.forEach(group => {
                sql += "UPDATE Groups SET Groups.agendaID = ? WHERE Groups.groupID = ?; ";
                value.push(id);
                value.push(group.groupID);
            })

            DataBase.con.query(sql, value, (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        })
    }

    static deleteByID(id) {
        return new Promise((resolve, reject) => {
            let sql = "DELETE FROM Agendas WHERE Agendas.agendaID = ?";
            let value = [id];

            DataBase.con.query(sql, value, (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        })
    }
}