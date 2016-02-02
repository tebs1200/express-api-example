var api = require('../../server.js'),
    request = require('supertest')(api),
    should = require('chai').should();

describe('Widgets', function() {

    it('returns a 200 response', function(done) {
        request
            .get('/widgets')
            .expect(200, done);
    });

    it('returns json', function(done) {
        request
            .get('/widgets')
            .set('Accept', 'application/jsom')
            .expect('Content-Type', 'application/json', done);
    });

    it('should have "hello" property with value "world"', function(done) {
        request
            .get('/widgets')
            .set('Accept', 'application/jsom')
            .expect(200)
            .end(function(err, res) {
                res.body.should.have.property("hello");
                res.body.hello.should.equal("world");
                done();
            });
    });

});