const app = require('../../src/app');

describe('\'maintenance\' service', () => {
  it('registered the service', () => {
    const service = app.service('maintenance');
    expect(service).toBeTruthy();
  });
});
