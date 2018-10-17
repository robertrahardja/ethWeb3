let chai = require('chai')
let chaiHttp = require('chai-http')
var expect = require('expect')
let server = require('../app.js');
var expect = chai.expect;
chai.use(require('chai-json'));
chai.use(chaiHttp)


describe('Gas Minimum API. getMinimumGasHttpTest.js', () => {
  describe('Get: /transactions/gasMinimum. Input: none', () => {
    it(' and should return with pattern {gas: }', (done) => {
      chai.request(server)
        .get('/transactions/gasMinimum')
        .end((err, res) => {
          //expect(res.body).to.be.a.jsonFile();
          expect(res.body).to.have.property('gas')
          expect(res).to.have.status(200);
          console.log ( "\tOutput: " + res.text )
          done();
        });
    });
  });
});