const express = require('express')
var router = express.Router();

//Library access variables
//`m/44'/60'/0'/0`
const hdPath =  require('../../libs/path');
//Not sure if we should use this
//const SignerProvider = require('ethjs-provider-signer');
const setWeb3Provider = require('../../libs/setWeb3Provider');
const contractAddress = require('../../libs/contractAddress');
//Kevin used odinCoin instead of ABI
const ABI = require('../../libs/ABI');
const provider = require('../../libs/provider');
//rpcAddress is the same as provider
const rpcAddress = require('../../libs/provider');

router.get('/', function(req, res)  {

    res.write('Testing module insertion\n\n');
    res.write('hdPath is ' + hdPath + '\n\n');
    res.write('setWeb3Provider is \n\n'+ setWeb3Provider + '\n\n');
    res.write('contractAddress is '+ contractAddress+ '\n\n');
    res.write('provider and rpc address is '+ provider +'\n\n');
    res.write('ABI is \n' + JSON.stringify(ABI));
    res.end();
    }
);

module.exports = router;