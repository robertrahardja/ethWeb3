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
//const TransferTokens = require('./libs/TransferTokens');
//const CheckBal = web3.eth.contract(TransferTokens);
router.post('/checkBalances', urlencodedParser , function(req, res){
    try
    {
         //var keystore = lightwallet.keystore.deserialize(req.body.keystore);
          //The transaction signer provider
          var address = req.body.address;
          if (address == null){
               res.send("Kindly provide the user's Address");
            }
      function OdinBalancePromise(user_addr, contract_addr) {
        return new Promise((resolve, reject) => {
            
              var ethBalance = web3.eth.getBalance(user_addr);
              ethBalance = ethBalance.c[0]/10000;
              console.log("User's ETH balance is" + " "  + ethBalance)
              const tokenContract = contract.at(contract_addr);
              var odinBalance = tokenContract.balanceOf.call(user_addr);
              odinBalance = odinBalance.c[0];
              console.log("User's ODIN balance is" + " " + odinBalance);
              var output =
            {
              ethBalance : ethBalance,
              odinBalance : odinBalance
            }
              return resolve(output);
            });
          }
            var ResultPromise = new Promise((resolve, reject) => {
        
              var balanceDetails = OdinBalancePromise(address, contractAddress)
              resolve(balanceDetails);
            })
            ResultPromise.then(function(balanceDetails){
              res.send(balanceDetails);
            })
      }
    catch(err){
              console.log(err.message);
              res.send(err.message);
            }
    finally{
              var time = new Date(Date.now()).toUTCString();
               //console.log(time);
              console.log("CheckBalances.js [checkBalances] is executed at UTC Time :" + time);
	}
});

module.exports = router;
