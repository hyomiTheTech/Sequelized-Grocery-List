var mysql = require('mysql');

var db = mysql.createConnection({
    database: 'grocerylistdb',
    user: 'root',
    password: ""
})

db.connect()

module.exports = db;
