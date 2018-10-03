var Web3 = require('web3');
const express = require('express')
var router = express.Router();
const bodyParser = require('body-parser')
// create application/json parser
var jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//const web3 = require('../libs/setWeb3Provider');
const setWeb3Provider = require('../libs/setWeb3Provider');
const web3 = new setWeb3Provider();

//var coinbase = web3.eth.coinbase;
var balance = web3.eth.getBalance("0xcd8e3e5b4a92cb8689da99026f11624d59b45a5c");
console.log(balance); 

router.get('/', function (req, res) {
    res.send("balance of Owner is : " + balance)
  })
module.exports = router;