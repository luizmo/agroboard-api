const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const machines = sequelizeClient.define('machines', {
    frota: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    data_aquisicao:{
      type: DataTypes.TIME,
      allowNull: false
    },
    horasPosManutencao: {
      type: DataTypes.TIME
    },
    horasTotais:{
      type: DataTypes.TIME
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  machines.associate = function (models) {
  };

  return machines;
};
