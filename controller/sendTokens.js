const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
// create application/json parser
const jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const ABI = require('../libs/ABI');
const contractAddress = require('../libs/contractAddress');
const Tx = require('ethereumjs-tx');
//const lightwallet  = require('eth-lightwallet');
//var currentPassword;
//var HookedWeb3Provider = require("hooked-web3-provider");
var Web3 = require('web3');
//const hdPath =  require('./libs/path');
//const SignerProvider = require('ethjs-provider-signer');
//const setWeb3Provider = require('./libs/setWeb3Provider');
//const odinCoin = require('./libs/odinCoinLatest')
const provider = require('../libs/provider');
//const rpcAddress = require('./libs/provider');
//const TransferTokens = require('./libs/TransferTokens')
//var passwordHash = require('sha256');
//var app = express();
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());


var web3 = new Web3(new Web3.providers.HttpProvider(provider));

router.post('/transactions/sendTokens', urlencodedParser, function(req, res){
  //Send Transaction Code
 console.log(req);
 try {
  web3.setProvider(new Web3.providers.HttpProvider(provider));
     //const password = passwordHash(req.body.password);
     const privateKey = req.body.privateKey;
     var pkBuffer = new Buffer.from(privateKey, 'hex')
     const tokenAmount  = req.body.amount;
     const toAddress = req.body.toAddress;
     const gasPrice = web3.eth.gasPrice.toNumber() * 2;
     const fromAddress = req.body.fromAddress;
     var nonce = web3.eth.getTransactionCount(fromAddress);
     //console.log(req.body.contractAbi);
    //const tokenToSend = req.body.tokenToSend;
    //const contractAbi = JSON.parse(req.body.contractAbi);
    var gasLimit = 200000;

    //const contract = web3.eth.contract(ABI);
    /*
    var keystore = lightwallet.keystore.deserialize(req.body.keystore);
 //const password = prompt('Please enter keystore password', 'Password');

    keystore.keyFromPassword(password, function(err, pwDerivedKey) {
    //global_keystore = ks;
      var seed = keystore.getSeed(pwDerivedKey);
      keystore.passwordProvider = (callback) => {
        // we cannot use selector inside this callback so we use a connst value
          const ksPassword = password;
          callback(null, ksPassword);
    };
        const ksPassword = password;
        if (!keystore) {
              throw new Error('No keystore found - please create wallet');
    }
        if (keystore) {
      //The transaction signer provider
          const NewProvider = new SignerProvider(rpcAddress, {
            signTransaction: keystore.signTransaction.bind(keystore),
            accounts: (cb) => cb(null,keystore.getAddresses()),
      });

      web3.setProvider(NewProvider);
    }

    const fromAddress = keystore.getAddresses()[0];

      const decimals = 0;
      const maxGasForTokenSend = 200000;

      const sendParams = { from: fromAddress, value: '0x0', gasPrice, gas: maxGasForTokenSend};
      const tokenAmount = amount ;
    */




      function sendTokenPromise(tokenContractAddress, sendToAddress, sendAmount) { // eslint-disable-line no-inner-declarations
        return new Promise((resolve, reject) => {
          //const tokenContract = erc20Contract.at(tokenContractAddress)
          //const contract = web3.eth.contract(ABI);
          const contract = web3.eth.contract(ABI).at(contractAddress);
          //const tokenContract = contract.at(tokenContractAddress);

          var rawTransaction = {
            "from": fromAddress,
            "nonce": nonce,
            "gasPrice": gasPrice,
            "gasLimit": gasLimit,
            "to": contractAddress,
            "value": "0x0",
            "data": contract.transfer.getData(sendToAddress, sendAmount, {from: fromAddress}),
            "chainId": 5780,
            };

            var tx = new Tx(rawTransaction);
            tx.sign(pkBuffer);
            var serializedTx = tx.serialize();


          //const BeepTokenSend = BeepTokenContract.at(tokenContractAddress)
          web3.eth.sendRawTransaction('0x' + serializedTx.toString('hex'), function(err, hash){

            if (err) return reject(err);
            return resolve(hash);
          });
        });
      }

      var OdinPromise = new Promise(function (resolve, reject) {
        var tx = sendTokenPromise(contractAddress, toAddress, tokenAmount);
        resolve(tx);
      })
      OdinPromise.then(function(tx){
        var OdintxHash = {}
        OdintxHash['result'] = tx;
        OdintxHash['status'] = true
        //items.walletID = walletID;
        //seedObj.push(items);
         res.send(OdintxHash);
        //res.send(tx);
      });
     OdinPromise.catch(function(err){
     var txSt={};
     txSt.status = false;
     res.send(txSt)
})

  } catch (err) {
   console.log(err.message);
   var txStatus = {};
    txStatus.status = "false"
    console.log(txStatus);
    res.send(txStatus);
  }
  finally{
   //Check Timestamp for logs
   var time = new Date(Date.now()).toUTCString();
   console.log("SendTokens.js [sendTokens] Executed at UTC Time :" + time);
  }
});

module.exports = router;