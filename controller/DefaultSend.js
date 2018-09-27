const express = require('express');
const router = express.Router();
const contractAddress = require('../libs/contractAddress');
const Web3 = require('web3');
const ABI = require('../libs/ABI');
const provider = require('../libs/provider');
//var app = express();
const bodyParser = require('body-parser')
// create application/json parser
const jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const web3 = new Web3(new Web3.providers.HttpProvider(provider));
const contract = web3.eth.contract(ABI);
const TransferTokens = require('../libs/TransferTokens');
const CheckBal = web3.eth.contract(TransferTokens);

router.get('/gasMinimum', urlencodedParser, function(req, res){
    const gasPrice = web3.eth.gasPrice.toNumber() * 1.40;
    const gasLimit = 50000;
    var minimum = gasPrice*gasLimit;
    minimum = minimum * Math.pow(10, -18);
    var minimumGas = {};
     minimumGas.gas = minimum;
    res.send(minimumGas);

});


module.exports = router;