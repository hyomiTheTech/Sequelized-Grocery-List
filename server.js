const express = require('express')
const app = express();
const port = 7777;
const bodyParser = require('body-parser')
const controller = require('./controller.js')

app.listen(port, () => { console.log(`Listening to port ${port}, Lets go!!`) })

app.use(express.static(__dirname + '/client/dist/'))
app.use(bodyParser.json())

app.get('/list', controller.get)
app.post('/grocerylist', controller.post)
app.delete('/grocerylist/:id', controller.delete)
app.post('/grocerylist/:id', controller.update)