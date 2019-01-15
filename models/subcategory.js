'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subcategory = sequelize.define('Subcategory', {
    name: DataTypes.STRING
  }, {});
  Subcategory.associate = function(models) {
    Subcategory.belongsTo(models.Category)
  };
  return Subcategory;
};