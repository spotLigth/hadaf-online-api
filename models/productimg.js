'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductImg = sequelize.define('ProductImg', {
    url: DataTypes.STRING
  }, {});
  ProductImg.associate = function(models) {
    ProductImg.belongsTo(models.Product)
  };
  return ProductImg;
};