const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const ABI = require('../libs/ABI');
const contractAddress = require('../libs/contractAddress');
const Tx = require('ethereumjs-tx');
var Web3 = require('web3');
const provider = require('../libs/provider');


var web3 = new Web3(new Web3.providers.HttpProvider(provider));

router.post('/transactions/sendTokens', urlencodedParser, function(req, res){
 console.log(req);
 try {
    
    //please note that privateKey and publicKey should be from a wallet. However this is from the browser for now
     web3.setProvider(new Web3.providers.HttpProvider(provider));
     const privateKey = req.body.privateKey;
     var pkBuffer = new Buffer.from(privateKey, 'hex')
     const tokenAmount  = req.body.amount;
     const toAddress = req.body.toAddress;
     const gasPrice = web3.eth.gasPrice.toNumber() * 2;
     const fromAddress = req.body.fromAddress;
     var nonce = web3.eth.getTransactionCount(fromAddress);
     var gasLimit = 200000;
     const contract = web3.eth.contract(ABI).at(contractAddress);

      function sendTokenPromise(tokenContractAddress, sendToAddress, sendAmount) { 
        return new Promise((resolve, reject) => {
          
          

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