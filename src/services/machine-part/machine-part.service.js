// Initializes the `machine-part` service on path `/machine-part`
const createModel = require('../../models/machine-part.model');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  const service = app.service('machine-part');
};
