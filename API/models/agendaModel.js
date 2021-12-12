const DataBase = require("../database/database");

module.exports = class ModelAgenda {

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

    static selectID(id) {
        return new Promise((resolve, reject) => {
            let sql = "";
            let value = [];
            DataBase.con.query(sql, value, (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        })
    }

    static selectGroupByID(id) {
        return new Promise((resolve, reject) => {
            let sql = "";
            let value = [];
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

    static selectSubjectByID(id) {
        return new Promise((resolve, reject) => {
            let sql = "";
            let value = [];
            DataBase.con.query(sql, value, (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        })
    }

    static insert(agendas) {
        return new Promise((resolve, reject) => {
            let sql = "";
            let value = [];
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
            DataBase.con.query(sql, value, (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        })
    }

    static updateByID(id, agenda) {
        return new Promise((resolve, reject) => {
            let sql = "";
            let value = [];
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