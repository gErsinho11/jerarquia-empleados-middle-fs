const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Empleado', {
    nombre: {
    	type: DataTypes.STRING,
      allowNull: false
    },
    cargo: {
      type: DataTypes.STRING,
    },
    version: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    fechaCambioJefe: {
      type: DataTypes.DATE,
    },
  },
  {
    timestamps: false
  });
};