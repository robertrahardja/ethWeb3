var expect = require('expect')
var chai = require('chai')
var chaiAsPromised = require("chai-as-promised")
chai.use(chaiAsPromised)
var expect = chai.expect

//const contractAddress = require('../libs/contractAddress');


describe('Send Token Promise Test. sendTokenPromiseTest.js', () => {
    describe('send a token. Input: none', () => {
      it('result should return type string which is a hash', async() => {
        
            sendTokenPromise = require("../modules/sendTokenPromise")
            tokenContractAddress = '0x654fAdc9A965B4e8fAF9aee7601fB002e09A5FA8'
            fromAddress = '0xcD8E3E5B4a92cB8689Da99026f11624d59B45a5c'
            sendToAddress = '0x63f435b55153A9AE2843216c2c6BE46701054cbd'
            sendAmount = '1'
            privateKey = '1F276EB3CDB1688582E8FDF5F518C1136CA699D76F3E9495620B942A7BD403AF'
            // var pkBuffer = new Buffer.from(privateKey.substring(2,66), 'hex')
            //var pkBuffer = new Buffer.from(privateKey, 'hex')
            // console.log('pkBuffer is : ')
            // console.log(pkBuffer)

            // process.on('unhandledRejection', error => {
            //   // Will print "unhandledRejection err is not defined"
            //   console.log('unhandledRejection', error.message);
            // });
            return sendTokenPromise(tokenContractAddress, sendToAddress, sendAmount, fromAddress, privateKey)
            .then((hash)=>{
              //expect(hash).to.be.a('string')
              // var tx = sendTokenPromise(contractAddress, toAddress, tokenAmount);
              console.log("Transaction succeeded: " )
              console.log(hash)
              // console.log(typeof(hash))
            })
            .catch((err) => {
              console.log('error here:')
              console.log(err)
            })
      });
    });
  })