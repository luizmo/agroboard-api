const app = require('../../src/app');

describe('\'machine-part\' service', () => {
  it('registered the service', () => {
    const service = app.service('machine-part');
    expect(service).toBeTruthy();
  });
});
