const Web3 = require('web3');
const provider = require('../libs/provider');
const web3 = new Web3(new Web3.providers.HttpProvider(provider));

module.exports = (userAddress) => {

    return new Promise((resolve) => {
        var usrEthBalance = web3.eth.getBalance(userAddress);
        usrEthBalance = usrEthBalance.c[0] / 10000;

        //set as object
        var output =
        {
            ethBalance: usrEthBalance

        }

        //for debugging
        var sOutput = JSON.stringify(output)
        console.log("\tOutput: " + sOutput)

        resolve(output);
    })
};
