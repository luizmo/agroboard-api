const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const maintenancePart = sequelizeClient.define('maintenance_part', {
      
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  maintenancePart.associate = function (models) {
  };

  return maintenancePart;
};
