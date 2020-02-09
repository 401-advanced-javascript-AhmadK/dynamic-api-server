'use strict';

const { server } = require('../lib/server.js');
const supergose = require('@code-fellows/supergoose');
const mockRequest = supergose(server);

describe('Middleware Tests' , () => {
  it('responds with 404 error when a route is not found', () => {
    return mockRequest.get('/whateverDude')
      .then( results => {
        expect(results.status).toBe(404);
      });
  });

  it('responds with 500 error when there is an error', () => {
    return mockRequest.get('/api/v1/whateverDude')
      .then( results => {
        expect(results.status).toBe(500);
      });
  });  
});