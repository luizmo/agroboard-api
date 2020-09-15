const app = require('../../src/app');

describe('\'maintenance-part\' service', () => {
  it('registered the service', () => {
    const service = app.service('maintenance-part');
    expect(service).toBeTruthy();
  });
});
