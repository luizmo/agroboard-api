const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const maintenance = sequelizeClient.define('maintenance', {
    isDone: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  maintenance.associate = function (models) {
    const {machines, machine_part} = models;
    maintenance.belongsTo(machines);
    maintenance.belongsToMany(machine_part, {as: 'maintenance', through: 'maintenance_part', onDelete: 'NO ACTION'});
  };

  return maintenance;
};
