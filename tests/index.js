var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
var server = 'http://localhost:8080';

chai.use(chaiHttp);

describe('/', function() {
  it('home page is displayed', function(done) {
    chai.request(server)
      .get('/')
      .end(function(err, res) {
        res.should.have.status(200);
        done();
      })
  });
});
describe('/api/all', function() {
  it('returns all beers to help determine winning ranks', function(done) {
    chai.request(server)
      .get('/api/all')
      .end(function(err, res) {
        res.should.have.status(200);
        done();
      });
  });
});
describe('/api/beers/:gen_style', function() {
  it('returns an array of beers within the category', function(done) {
    chai.request(server)
      .get('/api/beers/:gen_style')
      .end(function(err, res) {
        res.should.have.status(304);
        done();
      });
  });
});
describe('/api/update', function() {
  it('returns an array of beers within the category', function(done) {
    chai.request(server)
      .put('/api/update')
      .end(function(err, res) {
        res.should.have.status(204);
        done();
      });
  });
});

