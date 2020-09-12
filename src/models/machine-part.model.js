const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const machinePart = sequelizeClient.define('machine_part', {
    horas_trabalhadas: {
      type: DataTypes.TIME,
      allowNull: false
    },
    data_instalacao: {
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
  };

  return machinePart;
};
