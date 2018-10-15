const lightwallet  = require('eth-lightwallet');

module.exports = function deriveKeyPromise(keyS) {
  
  return new Promise((resolve, reject)=> {

    var keystore = lightwallet.keystore.deserialize(keyS)
    resolve(keystore)
    
  })
}
