const app = require('../../src/app');

describe('\'machineModel\' service', () => {
  it('registered the service', () => {
    const service = app.service('machine-model');
    expect(service).toBeTruthy();
  });
});
