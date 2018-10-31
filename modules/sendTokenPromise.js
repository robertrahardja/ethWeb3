
const Web3 = require('web3');
const provider = require('../libs/provider');
const web3 = new Web3(new Web3.providers.HttpProvider(provider));

const ABI = require('../libs/ABI');

//Odin Contract Address
const contractAddress = require('../libs/contractAddress');
const Tx = require('ethereumjs-tx');

// const privateKey = req.body.privateKey;
// var pkBuffer = new Buffer.from(privateKey, 'hex')
// const tokenAmount  = req.body.amount;
// const toAddress = req.body.toAddress;
const gasPrice = web3.eth.gasPrice.toNumber() * 2;
// const fromAddress = req.body.fromAddress;
var gasLimit = 200000;

const contract = web3.eth.contract(ABI).at(contractAddress);

//privateKey = '1F276EB3CDB1688582E8FDF5F518C1136CA699D76F3E9495620B942A7BD403AF'


// var pkBuffer = new Buffer.from(privateKey, 'hex')



//odin
// const odinContract = web3.eth.contract(ABI);

module.exports = function sendTokenPromise(tokenContractAddress, sendToAddress, sendAmount, fromAddress, privateKey) { 
    // console.log('hi')
    // console.log('fromAddress is : ')
    // console.log(fromAddress)
    // console.log('pkBuffer is : ')
    // console.log(pkBuffer)
    // process.on('unhandledRejection', error => {
    //     // Will print "unhandledRejection err is not defined"
    //     console.log('unhandledRejection', error.message);
    //   });
    console.log('type of privateKey is : ')
    console.log(typeof(privateKey))
    var pkBuffer = new Buffer.from(privateKey.substring(2,66), 'hex')
    var nonce = web3.eth.getTransactionCount(fromAddress)
    // console.log('type of nonce is : ')
    // console.log(typeof(nonce))
    return new Promise((resolve, reject) => {
      
       
        // console.log('nonce is : ')
        // console.log(nonce)
        // console.log('data is :')
        //console.log( contract.transfer.getData(sendToAddress, sendAmount, {from: fromAddress}))
        var rawTransaction = {
            "from": fromAddress,
            "nonce": nonce,
            "gasPrice": gasPrice,
            "gasLimit": gasLimit,
            "to": tokenContractAddress,
            "value": "0x0",
            // "data": contract.transfer.getData(sendToAddress, sendAmount, {from: fromAddress}).catch((err)=>{console.log('error one : '); console.log(err)}),
            "data": contract.transfer.getData(sendToAddress, sendAmount),
            //"data" : contract.methods.transfer(sendToAddress, sendAmount).encodeABI();
            "chainId": 3,
            };

        var tx = new Tx(rawTransaction);
        // console.log('tx is : ')
        // console.log(tx)
        tx.sign(pkBuffer)
        var serializedTx = tx.serialize()
        // console.log("serialized text is : ")
        // console.log(serializedTx)
        // console.log('serializedTx to string in hex is : ')
        // console.log('rawtransaction is ')
        // console.log(rawTransaction)
        // console.log(serializedTx.toString('hex'))
        
        web3.eth.sendRawTransaction('0x' + serializedTx.toString('hex'), function (err, hash){ resolve (hash)}
        // function(err, hash){
        //     if (err){
        //         console.log("there's an error :")
        //         console.log(err)

        //         reject(err)
        //     }else{
        //     // if (err) return reject(err);
        //     console.log('hash is : ')
        //     console.log(hash)
        //     resolve(hash);
        //     }
        // }
        )
        // .then((hash)=> {return hash})
    //   .catch((err)=>{console.log('error one : '); console.log(err)})
    //});
    })


}
