const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const machines = sequelizeClient.define('machines', {
    frota: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    dataAquisicao:{
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
    const { maintenance, machine_model, machine_part } = models;
    machines.hasMany(maintenance);
    machines.hasMany(machine_part);
    machines.belongsTo(machine_model);
  };

  return machines;
};
