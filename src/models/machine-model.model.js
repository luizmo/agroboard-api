const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const machineModel = sequelizeClient.define('machine_model', {
    modelo: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    fabricante: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  machineModel.associate = function (models) {
  };

  return machineModel;
};
