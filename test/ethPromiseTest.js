var expect = require('expect')
var chai = require('chai')
var chaiAsPromised = require("chai-as-promised")
chai.use(chaiAsPromised)
var expect = chai.expect
var chaiMatchPattern = require('chai-match-pattern');
chai.use(chaiMatchPattern);
var _ = chaiMatchPattern.getLodashModule(); 

describe('Ether Promises', () => {
  describe('Ether Balance Promise Test', () => {

    it('Promise returned object with pattern {"ethBalance": Number} ', () => {
      const getUserEthBalance = require("../modules/getUserEthBalance")
      userAddress = '0xcd8e3e5b4a92cb8689da99026f11624d59b45a5c'
      
      return getUserEthBalance(userAddress).then((result) => {

        expect(result).to.matchPattern(`{
          "ethBalance": _.isNumber,
          }`)
      })
    })
  })
})
