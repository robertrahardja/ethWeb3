var expect = require('expect')
var chai = require('chai')
var chaiAsPromised = require("chai-as-promised")
chai.use(chaiAsPromised)
var expect = chai.expect

var chaiMatchPattern = require('chai-match-pattern');
chai.use(chaiMatchPattern);
var _ = chaiMatchPattern.getLodashModule();

describe('Private Key from Keystore Promise Module. privateKeyPromiseTest.js', () => {
    describe('privateKeyPromise.js Test. Input: password, keystore', () => {

        it('Promise returned hexadecimal password', () => {
            const getPrivateKeyfromKeyStore = require("../modules/getPasswordFromKeystore")
            password = "testPassword"
            keyStore = '{"encSeed":{"encStr":"UirlTZ5TPnyURp63LfjtM2SnlagOYzRV0pMPDVnZop4ePsEbhdlUkziNLgoAI0fWrhPVQcXTopnbXOQilEqEdUKjoEPX748mrWwENPsxlYdHx0HjUU7pjyfHAwDCB/qdye9/4UN7mXiO4HrRRYjPO9hozFMyD/aJ86SLJQwcO9tQvTT4OjztUw==","nonce":"Om5rbVIV6Cq0FNp861UdZWUY8Ko9SndK"},"encHdRootPriv":{"encStr":"ySuaHRl0LvoJ6YDtrHSndfwHywbVmX0QmVfdRcmez/t1yCeZ1kVpbBBv8fM8nqpGYKwqxou1wlhfHsSmc1iYA4RL7iEO3Cypwd6WNF4eW17vPTdOPaau26usUyArl40rgQqCju1BgO4wc3p8w4EQvs0JxNPdftXuG4I45kM3FQ==","nonce":"IOZDo4bZ9FLlokSDmcWkNv2x3t+9U6BB"},"addresses":["440c90d5c5fe8a4a68069d3b57856b98350ad6db"],"encPrivKeys":{"440c90d5c5fe8a4a68069d3b57856b98350ad6db":{"key":"UIHKgUqpFOfR3IF+j8WiNonSHJFCwolMkH+MIEWlTY5pOGn5vN8B7cChGuTx4gMg","nonce":"XqPEG7KEBCDVnwtO6UmqyasS/RTLfMKo"}},"hdPathString":"m/44\'/60\'/0\'/0","salt":"mpSIIpUuEyZIqmE44FfvOHIuqsqg+IUO3DuIRtoc84k=","hdIndex":1,"version":3}'

            return getPrivateKeyfromKeyStore(password, keyStore).then((result) => {
                /*
                expect(result).to.matchPattern(`{
                  "ethBalance": _.isNumber,
                  }`)
                */
                console.log("\tprivate key is :" + result)
            })
                .catch((err) => console.log("\tError: " + err.message))
        })

        it('Promise returned error for wrong password', () => {
            const getPrivateKeyfromKeyStore = require("../modules/getPasswordFromKeystore")
            password = "wrongPassword"
            keyStore = '{"encSeed":{"encStr":"UirlTZ5TPnyURp63LfjtM2SnlagOYzRV0pMPDVnZop4ePsEbhdlUkziNLgoAI0fWrhPVQcXTopnbXOQilEqEdUKjoEPX748mrWwENPsxlYdHx0HjUU7pjyfHAwDCB/qdye9/4UN7mXiO4HrRRYjPO9hozFMyD/aJ86SLJQwcO9tQvTT4OjztUw==","nonce":"Om5rbVIV6Cq0FNp861UdZWUY8Ko9SndK"},"encHdRootPriv":{"encStr":"ySuaHRl0LvoJ6YDtrHSndfwHywbVmX0QmVfdRcmez/t1yCeZ1kVpbBBv8fM8nqpGYKwqxou1wlhfHsSmc1iYA4RL7iEO3Cypwd6WNF4eW17vPTdOPaau26usUyArl40rgQqCju1BgO4wc3p8w4EQvs0JxNPdftXuG4I45kM3FQ==","nonce":"IOZDo4bZ9FLlokSDmcWkNv2x3t+9U6BB"},"addresses":["440c90d5c5fe8a4a68069d3b57856b98350ad6db"],"encPrivKeys":{"440c90d5c5fe8a4a68069d3b57856b98350ad6db":{"key":"UIHKgUqpFOfR3IF+j8WiNonSHJFCwolMkH+MIEWlTY5pOGn5vN8B7cChGuTx4gMg","nonce":"XqPEG7KEBCDVnwtO6UmqyasS/RTLfMKo"}},"hdPathString":"m/44\'/60\'/0\'/0","salt":"mpSIIpUuEyZIqmE44FfvOHIuqsqg+IUO3DuIRtoc84k=","hdIndex":1,"version":3}'

            return getPrivateKeyfromKeyStore(password, keyStore).then((result) => {
               
                console.log("\tprivate key is :" + result)
            })
                .catch((err) => console.log("\tError: " + err.message))
        })
    })
})
