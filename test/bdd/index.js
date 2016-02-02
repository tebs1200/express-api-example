var api = require('../../server.js'),
    request = require('supertest')(api);

describe('Widgets', function() {

    it('Return a 200 response', function(done) {
        request
            .get('/widgets')
            .expect(200, done);
    });

});