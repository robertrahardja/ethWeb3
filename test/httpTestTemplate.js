let chai = require('chai')
let chaiHttp = require('chai-http')
var expect = require('expect')
let server = require('../app.js');
var expect = chai.expect;
chai.use(chaiHttp)


describe('testing connection to node', () => {
    it('api get should return status 200 and a default account balance', (done) => {
          chai.request(server)
          .get('/ctest')
          .end((err, res) => {
                expect(res).to.have.status(200);
                console.log ( res.text )
            done();
          });
    });
});