const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    resume: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    diet: {
      type: DataTypes.ENUM({
        values: [
          "gluten free",
          "dairy free",
          "lacto ovo vegetarian",
          "vegan",
          "paleolithic",
          "primal",
          "whole 30",
          "pescatarian",
          "ketogenic",
          "fodmap friendly"
        ]
      }),
      allowNull: false,
    },
    healthScore: {
      type: DataTypes.STRING
    },
    steps: {
      type: DataTypes.STRING
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    }
  });
};
