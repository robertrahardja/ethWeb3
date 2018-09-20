const express = require('express')
const app = express()
const port = 3000

const bodyParser = require('body-parser')
// create application/json parser
var jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.use('/', require('./controller/router.js'));

app.post('/test', urlencodedParser, function (req, res) {
    if (!req.body) return res.sendStatus(400)
    res.send( req.body.josVar)
  })

app.listen(port, () => console.log(`Trial: listening on port ${port}!`))