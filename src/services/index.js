const users = require('./users/users.service.js');
const machines = require('./machines/machines.service.js');
const maintenance = require('./maintenance/maintenance.service.js');
const part = require('./part/part.service.js');
const machineModel = require('./machine-model/machine-model.service.js');
const machinePart = require('./machine-part/machine-part.service.js');
const maintenancePart = require('./maintenance-part/maintenance-part.service.js');

module.exports = function (app) {
  app.configure(users);
  app.configure(machines);
  app.configure(maintenance);
  app.configure(part);
  app.configure(machineModel);
  app.configure(machinePart);
  //app.configure(maintenancePart);
};
