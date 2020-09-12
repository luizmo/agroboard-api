const { Maintenance } = require('./maintenance.class');
const createModel = require('../../models/maintenance.model');
const hooks = require('./maintenance.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  app.use('/maintenance', new Maintenance(options, app));

  const service = app.service('maintenance');

  service.hooks(hooks);
};
