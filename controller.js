const dbHelper = require('./db/dbHelper.js')

module.exports = controller = {
    get: (req, res) => {
        dbHelper.getData((err, data) => {
            if (err) {
                res.status(404).send(err)
            } else {
                res.status(200).send(data)
            }
        })
    },
    post: (req, res) => {
        dbHelper.postData(req, (err, data) => {
            if (err) {
                res.status(404).send(err)
            } else {
                res.status(200).send("successful!")
            }
        })
    },
    delete: (req, res) => {
        dbHelper.deleteData(req, (err, data) => {
            if (err) {
                res.status(404).send(err)
            } else {
                res.status(200).send("successful!")
            }
        })
    },
    update: (req, res) => {
        dbHelper.updateData(req, (err, data) => {
            if (err) {
                res.status(404).send(err)
            } else {
                res.status(200).send("successful!")
            }
        })
    }
}