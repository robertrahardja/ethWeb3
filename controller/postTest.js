const express = require('express')
var router = express.Router();

const bodyParser = require('body-parser')
// create application/json parser
var jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.post('/', urlencodedParser, function (req, res) {
    if (!req.body) return res.sendStatus(400)
    res.send( req.body.testVar)
  })

module.exports = router;