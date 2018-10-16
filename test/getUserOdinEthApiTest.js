var chai = require('chai')
var chaiHttp = require('chai-http')
var expect = require('expect')
var server = require('../app')
var expect = chai.expect
chai.use(chaiHttp)
//var chaiAsPromised = require("chai-as-promised")
//chai.use(chaiAsPromised)


describe('Get user\'s Odin and Eth Balances', () => {
    it('api get should return status 200 and both Odin and Eth balance', (done) => {
        chai.request(server)
            .post('/getUsrOdinEthBal')
            .set('content-type', 'application/x-www-form-urlencoded')
            .type('form')
            .send({ userAddress: '0xcd8e3e5b4a92cb8689da99026f11624d59b45a5c' })
            //.send('userAddress="0xcd8e3e5b4a92cb8689da99026f11624d59b45a5c"')
            .end((err, res) => {
                expect(res).to.have.status(200);
                console.log("\tres status is : " + JSON.stringify(res.status));
                console.log("\tres text : " + JSON.stringify(res.text));
                done();
            });
    });
});