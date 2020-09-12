// Initializes the `machineModel` service on path `/machine-model`
const { MachineModel } = require('./machine-model.class');
const createModel = require('../../models/machine-model.model');
const hooks = require('./machine-model.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  app.use('/machine-model', new MachineModel(options, app));

  const service = app.service('machine-model');

  service.hooks(hooks);
};
