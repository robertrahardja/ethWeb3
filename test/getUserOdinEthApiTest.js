var chai = require('chai')
var chaiHttp = require('chai-http')
var expect = require('expect')
var server = require('../app')
var expect = chai.expect
chai.use(chaiHttp)
var chaiMatchPattern = require('chai-match-pattern');
chai.use(chaiMatchPattern);
var _ = chaiMatchPattern.getLodashModule();

describe('Get user\'s Odin and Eth Balances', () => {
    it('API should return status 200 and both Odin and Eth balance', () => {
        chai.request(server)
            .post('/getUsrOdinEthBal')
            .set('content-type', 'application/x-www-form-urlencoded')
            .type('form')
            .send({ userAddress: '0xcd8e3e5b4a92cb8689da99026f11624d59b45a5c' })
            //.send({ userAddress: 'hi' })            
            .end((err, res) => {
                //.end((res) => {
                expect(res).to.have.status(200);
                expect(res).isObject();
                console.log("\tres status is : " + JSON.stringify(res.status));
                console.log("\tres text : " + JSON.stringify(res.text));
                console.log("\tgetUserOdinEthApiTest.js Error message: " + err)
            })
            ;
    });
    it('API should return status 200 and error message stating invalid address', () => {
        chai.request(server)
            .post('/getUsrOdinEthBal')
            .set('content-type', 'application/x-www-form-urlencoded')
            .type('form')
            //.send({ userAddress: '0xcd8e3e5b4a92cb8689da99026f11624d59b45a5c' })
            .send({ userAddress: 'hi' })            
            .end((err, res) => {
                //.end((res) => {
                expect(res).to.have.status(200);
                expect(res).isObject();
                console.log("\tres status is : " + JSON.stringify(res.status));
                console.log("\tres text : " + JSON.stringify(res.text));
                console.log("\tgetUserOdinEthApiTest.js Error message: " + err)
            })
            ;
    });
});