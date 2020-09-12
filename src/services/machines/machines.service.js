const { Machines } = require('./machines.class');
const createModel = require('../../models/machines.model');
const hooks = require('./machines.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  app.use('/machines', new Machines(options, app));

  const service = app.service('machines');

  service.hooks(hooks);
};
