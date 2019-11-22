var mysql = require('mysql');

var db = mysql.createConnection({
    database: 'grocerylistdb',
    user: 'root',
    password: "Rladmlgus90"
})

db.connect()

module.exports = db;