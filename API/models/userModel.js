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

    static selectGroupByID(id, limit, offset) {
        return new Promise((resolve, reject) => {
            let sql = "";
            let value = [];
            DataBase.con.query(sql, value, (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        })
    }

    static insert(users) {
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
            let value = [];
            DataBase.con.query(sql, value, (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        })
    }

    static updateByID(id, user) {
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