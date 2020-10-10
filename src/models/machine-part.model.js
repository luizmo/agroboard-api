const Sequelize = require('sequelize');
const maintenanceHooks = require('../services/maintenance/maintenance.hooks');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const machinePart = sequelizeClient.define('machine_part', {
    horasTrabalhadas: {
      type: DataTypes.TIME,
      allowNull: false
    },
    dataInstalacao: {
      type: DataTypes.DATE,
      allowNull: false
    },
    emUtilizacao:{
      type: DataTypes.BOOLEAN
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  machinePart.associate = function (models) {
    const { machines, part, maintenance } = models;
    machinePart.belongsTo(machines);
    machinePart.belongsTo(part);
    machinePart.belongsToMany(maintenance, {as: 'machine_part', through: 'maintenance_part', onDelete: 'NO ACTION'});
  };

  return machinePart;
};
