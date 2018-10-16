var expect = require('expect')
var chai = require('chai')
var chaiAsPromised = require("chai-as-promised")
chai.use(chaiAsPromised)
var expect = chai.expect
var chaiMatchPattern = require('chai-match-pattern');
chai.use(chaiMatchPattern);
var _ = chaiMatchPattern.getLodashModule(); 

describe('Token Promises', () => {
  describe('Odin Token Balance Promise Test', () => {

    it('Promise returned object with pattern {"TokenBalance": Number} ', () => {
      const getUserTokenBalance = require("../controller/getUserTokenBalance")
      userAddress = '0xcd8e3e5b4a92cb8689da99026f11624d59b45a5c'
      tokenAddress = '0x654fAdc9A965B4e8fAF9aee7601fB002e09A5FA8'

      return getUserTokenBalance(userAddress, tokenAddress).then((result) => {

        expect(result).to.matchPattern(`{
          "TokenBalance": _.isNumber,
          }`)
      })
    })
  })
})
