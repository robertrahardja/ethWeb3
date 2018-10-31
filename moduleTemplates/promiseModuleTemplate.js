const lightwallet  = require('eth-lightwallet');

module.exports = function deriveKeyPromise(keyS) {
  
  return new Promise((resolve, reject)=> {
    if (keyS !== null && typeof keyS === 'number') {
    var keystore = lightwallet.keystore.deserialize(keyS)
    resolve(keystore)
    } else {
      reject ('input is not null or an object')
    }
  })
}
