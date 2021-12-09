const mysql = require("mysql");
const config = require("./config.json");

module.exports = class DataBase {

    static con;

    static connect() {
        this.con = mysql.createConnection({
            host: config.mysql.host,
            user: config.mysql.user,
            password: config.mysql.password,
            database: config.mysql.database
        });

        this.con.connect((err) => {
            if (err) throw err;
            console.log("App connect to DataBase !");
        })
    }
}