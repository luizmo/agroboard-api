const app = require('../../src/app');

describe('\'part\' service', () => {
  it('registered the service', () => {
    const service = app.service('part');
    expect(service).toBeTruthy();
  });
});
