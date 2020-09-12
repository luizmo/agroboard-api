const app = require('../../src/app');

describe('\'machinePart\' service', () => {
  it('registered the service', () => {
    const service = app.service('machine-part');
    expect(service).toBeTruthy();
  });
});
