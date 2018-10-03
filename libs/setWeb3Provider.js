var Web3 = require('web3');
const provider = require('./provider');

function setWeb3Provider() 
      {
        //var web3 = new Web3(new Web3.providers.HttpProvider(provider))
        var web3 = new Web3(new Web3.providers.HttpProvider(provider));
        return web3
      }


module.exports = setWeb3Provider;
