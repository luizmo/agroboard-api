const { Part } = require('./part.class');
const createModel = require('../../models/part.model');
const hooks = require('./part.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  app.use('/part', new Part(options, app));

  const service = app.service('part');

  service.hooks(hooks);
};
