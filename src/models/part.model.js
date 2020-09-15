// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const part = sequelizeClient.define('part', {
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lifetime: {
      type: DataTypes.TIME
    },
    horasTrabalhadas:{
      type: DataTypes.TIME
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  part.associate = function (models) {
    const { machine_part } = models;
    part.hasMany(machine_part);
  };

  return part;
};
