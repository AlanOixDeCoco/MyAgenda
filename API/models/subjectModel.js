const DataBase = require("../database/database");

module.exports = class ModelSubject {

    static selectAll(limit, offset) {
        return new Promise((resolve, reject) => {
            let sql = "SELECT subjectID, name, agendaID FROM Subjects LIMIT ? OFFSET ?";
            let value = [limit, offset];
            DataBase.con.query(sql, value, (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        })
    }

    static selectID(id) {
        return new Promise((resolve, reject) => {
            let sql = "SELECT name, agendaID FROM Subjects WHERE subjectID = ?";
            let value = [id];
            DataBase.con.query(sql, value, (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        })
    }

    static selectTasksByID(id, limit, offset) {
        return new Promise((resolve, reject) => {
            let sql = "SELECT Tasks.taskID, Tasks.name, Tasks.description, Tasks.deadline, Tasks.creation, Tasks.groupID, subjectID FROM Tasks WHERE Tasks.subjectID = ? LIMIT ? OFFSET ?";
            let value = [id, limit, offset];
            DataBase.con.query(sql, value, (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        })
    }

    static insert(subjects) {
        return new Promise((resolve, reject) => {
            let sql = "INSERT INTO Subjects (name, agendaID) VALUES";
            let value = [];

            subjects.forEach(subject => {
                sql += "(?,?), ";
                value.push(subject.name);
                value.push(subject.agendaID);
            });
            sql = sql.slice(0, -2) + ";";
            DataBase.con.query(sql, value, (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        })
    }

    static update(subjects) {
        return new Promise((resolve, reject) => {
            let sql = "";
            let value = [];

            subjects.forEach(subject => {
                sql += "UPDATE Subjects SET ";

                if (typeof subject.name !== 'undefined') {
                    sql += "Subjects.name = ? ";
                    value.push(subject.name);
                }

                if (typeof subject.agendaID !== 'undefined') {
                    sql += "Subjects.agendaID = ? ";
                    value.push(subject.agendaID);
                }

                sql += "WHERE Subjects.subjectID = ?; ";
                value.push(subject.subjectID);
            });
            DataBase.con.query(sql, value, (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        })
    }

    static updateByID(id, subject) {
        return new Promise((resolve, reject) => {
            let sql = "UPDATE Subjects SET "
            let value = [];

            if (typeof subject !== 'undefined') {
                if (typeof subject.name !== 'undefined') {
                    sql += "name = ?, ";
                    value.push(subject.name);
                }

                if (typeof subject.agendaID !== 'undefined') {
                    sql += "agendaID = ?, ";
                    value.push(subject.agendaID);
                }

                sql = sql.slice(0, -2) + " WHERE subjectID = ?";
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
            let sql = "DELETE FROM Subjects WHERE Subjects.subjectID = ?";
            let value = [id];
            DataBase.con.query(sql, value, (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        })
    }
}