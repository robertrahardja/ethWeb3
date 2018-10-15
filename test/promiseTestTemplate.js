var expect = require('expect')
var chai = require('chai')
var chaiAsPromised = require("chai-as-promised")
chai.use(chaiAsPromised)
var expect = chai.expect

describe('Testing all promises', function() {
  describe('Promises tests', function() {

        it('promise returned data is an object', () => {
            const deriveKeyPromise = require("../moduleTemplates/promiseModuleTemplate")
            var keyStoreString =  JSON.stringify({"encSeed":{"encStr":"G8d49nApdFUm4o89qmUBzeuu8wIyqqUz+BUsxEGetsLGBgagNfuk3212c2NxU3zhleUGsPaYWTONo6Y/QuvwzJuLziUbHzYzXKH9kEgAy77V1eOkONK4zS5I6JuxU+f7tMdqzABOeIGlIDtbbMOCjdaW31nFKhj76Bim2b+lVY1/1DJewdwl/Q==","nonce":"UZQXxSkzU2Q0Fc9L2l2xsLQb0lHiRC6s"},"encHdRootPriv":{"encStr":"MaANiGv6Gp6Carj4pOM2Tl/1HhndVNKRK73L0uC2yfNLUvl1tS2I9MgnhCh5SASq88w2Ynxs+cgVANg1EYOloV6F9Xpal0+3LpGOzbtxnj7J+6GKCBR2pgZOSdGGfJOJ8RcXIV8gqnbnbTQenGFB6e6zZ5ld0L3bTjXTv3tthQ==","nonce":"iOjeOodgAdep4N2fu8jPHxkQUTo46BJT"},"addresses":["977381f3daf7855edb20b4271d9c2f811b9e88ae"],"encPrivKeys":{"977381f3daf7855edb20b4271d9c2f811b9e88ae":{"key":"U1KLYAsCq3cqkZN+D85dyeMrWpvNsF3Y8Dh0OehoTddPby9KdZ8SssgpjQHqSUYE","nonce":"YFfALGb622J588xaMSVGKQml5EsaFaRn"}},"hdPathString":"m/44'/60'/0'/0","salt":"ZERH65PzCjYYqVfCaFARhHfXRV1LIUJZHig1rRj0its=","hdIndex":1,"version":3})
            
            return deriveKeyPromise(keyStoreString).then( (result) => {
                //console.log(result);
              expect(result).to.be.an('object')
            })
         })
        })
    })
