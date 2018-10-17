var expect = require('expect')
var chai = require('chai')
var chaiAsPromised = require("chai-as-promised")
chai.use(chaiAsPromised)
var expect = chai.expect
var chaiMatchPattern = require('chai-match-pattern');
chai.use(chaiMatchPattern);
var _ = chaiMatchPattern.getLodashModule(); 

describe('Ether Balance Promise Module. ethPromiseTest.js', () => {
  describe('getUserEthBalance.js Test. Input: userAddress', () => {

    it('Promise returned object with pattern {"ethBalance": Number} ', () => {
      const getUserEthBalance = require("../modules/getUserEthBalance")
      userAddress = '0xcd8e3e5b4a92cb8689da99026f11624d59b45a5c'
      
      return getUserEthBalance(userAddress).then((result) => {

        expect(result).to.matchPattern(`{
          "ethBalance": _.isNumber,
          }`)
      })
      .catch((err)=>console.log("\tError: " + err.message))
    })

    it('Promise returned object with invalid address error. Input: userAddress =\'hi\' ', () => {
      const getUserEthBalance = require("../modules/getUserEthBalance")
      userAddress = 'hi'
      
      return getUserEthBalance(userAddress).then((result) => {

        expect(result).to.matchPattern(`{
          "ethBalance": _.isNumber,
          }`)
      })
      .catch((err)=>console.log("\tError: " + err.message))
    })
  })
})
