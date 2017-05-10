var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
var server = 'http://localhost:3000';

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
describe('/beers/:category', function() {
  it('returns an array of beers within the category', function(done) {
    chai.request(server)
      .get('/beers/:category')
      .end(function(err, res) {
        res.should.have.status(200);
        done();
      });
  });
  it('updates the winning beer into the database', function(done) {
    chai.request(server)
      .post('/beers/:id')
      .update('content-type', 'application/json')
      .send({name: 'Mace Windu', type: 'Master'})
      .end(function(err, res) {
        res.should.have.status(204);
        done();
      });
  });
});
//stopped about here or so
describe('/siths', function() {
  it('return a list of siths', function(done) {
    chai.request(server)
      .get('/siths')
      .end(function(err, res) {
        res.should.have.status(200);
        done();
      });
  });
  it('creates a new sith', function(done) {
    chai.request(server)
      .post('/siths')
      .set('content-type', 'application/json')
      .send({name: 'Darth Maul', type: 'Lord'})
      .end(function(err, res) {
        res.should.have.status(204);
        done();
      });
  });
});