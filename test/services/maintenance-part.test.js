const app = require('../../src/app');

describe('\'maintenancePart\' service', () => {
  it('registered the service', () => {
    const service = app.service('maintenance-part');
    expect(service).toBeTruthy();
  });
});
