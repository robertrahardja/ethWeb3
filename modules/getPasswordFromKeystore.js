const hdPath =  require('../libs/path');
const passwordHash = require('sha256');
const lightwallet = require('eth-lightwallet');

module.exports = (rawPassword, rawKeystore) => {
    var password = passwordHash(rawPassword)
    
    var keystore = lightwallet.keystore.deserialize(rawKeystore);
    
    return new Promise((resolve) => {
        
        keystore.keyFromPassword(password, function (err, pwDerivedKey) {
            if (err){
                return reject(err)
            }
            var address = keystore.getAddresses()[0];
            
            var returnKey = keystore.exportPrivateKey(address, pwDerivedKey, hdPath);
            return resolve(returnKey);

        })
    
        .catch(err=>{return err})
    })
}
