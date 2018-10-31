const express = require('express');
const router = express.Router();
const odinContractAddress = require('../libs/contractAddress');
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const getUserEthBalance = require('../modules/getUserEthBalance')
const getUserTokenBalance = require('../modules/getUserTokenBalance')

router.post('/',
    
     urlencodedParser, (req, res) => {

        var address = req.body.userAddress;

        //for debugging
        console.log("\tuserAddress is : " + address)
     
        async function getUserOdinEth() {
            const usrEth = await getUserEthBalance(address)
                            .catch(err=>console.log("\tgetUserEthBalance Call " + err));
            const usrOdin = await getUserTokenBalance(address, odinContractAddress)
                            .catch(err=>console.log("\tgetUserTokenBalance Call " + err));

            return { "ethBalance": usrEth.ethBalance, "odinBalance": usrOdin.TokenBalance };
        }

        getUserOdinEth()
            .then((usr) => {
                //console.log("\tUser's ether balance is " + JSON.stringify(usr.ethBalance));
                //console.log("\tUser's Odin balance is " + JSON.stringify(usr.odinBalance));

                res.send(usr)

            })
            .catch((err)=>{console.log("\tgetUserOdinEthApi.js error: " + err );res.send("I'm sorry please try again")})
        }
);

module.exports = router;