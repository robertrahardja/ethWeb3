var Web3 = require('web3');
const provider = require('./provider');


function setWeb3Provider(privateKey) 
      {
        var web3 = new Web3(new Web3.providers.HttpProvider(provider));
        var web3Provider = new HookedWeb3Provider({
          host: provider,
          transaction_signer: privateKey
        });

        web3.setProvider(web3Provider);
      }

 module.exports = setWeb3Provider;
