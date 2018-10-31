const Web3 = require('web3');
const ABI = require('../libs/ABI');
const provider = require('../libs/provider');
const web3 = new Web3(new Web3.providers.HttpProvider(provider));
const contract = web3.eth.contract(ABI);


module.exports = (userAddress, tokenAddress) => {

    return new Promise((resolve) => {
        const contractInstance = contract.at(tokenAddress);
        var tokenBalance = contractInstance.balanceOf.call(userAddress);

        //get just the token balance out of Big Number output
        tokenBalance = tokenBalance.c[0];

        //set as object
        var output =
        {
            TokenBalance: tokenBalance

        }

        //for debugging
        //console.log("\tUser's Token Balance is " + output.TokenBalance)
        var sOutput = JSON.stringify(output)
        console.log("\tOutput: " + sOutput)

        resolve(output);

    })
};
