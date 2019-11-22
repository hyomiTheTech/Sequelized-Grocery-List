const db = require('./index.js')

module.exports = dbHelper = {
    getData: (callback) => {
        db.query(`Select * from grocerylists`, (err, data) => {
            if (err) {
                callback(err)
            } else {
                callback(null, data)
            }
        })
    },
    postData: (req, callback) => {
        db.query(`INSERT INTO grocerylists (grocerylist, quantity) values ("${req.body.grocerylist}", "${req.body.quantity}");`, (err, data) => {
            if (err) {
                callback(err)
            } else {
                callback(null, data)
            }
        })
    },
    deleteData: (req, callback) => {
        db.query(`DELETE FROM grocerylists where id="${req.params.id}"`, (err, data) => {
            if (err) {
                callback(err)
            } else {
                callback(null, data)
            }
        })
    },
    updateData: (req, callback) => {
        db.query(`update grocerylists set groceryList="${req.body.grocerylist}", quantity="${req.body.quantity}" where id="${req.params.id}";`, (err, data) => {
            if (err) {
                callback(err)
            } else {
                callback(null, data)
            }
        })
    }
}