// Initializes the `machine-part` service on path `/machine-part`
const createModel = require('../../models/machine-part.model');

module.exports = function (app) {
  createModel(app)

};
