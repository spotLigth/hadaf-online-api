'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductImg = sequelize.define('ProductImg', {
    url: DataTypes.STRING
  }, {});
  ProductImg.associate = function(models) {
    // associations can be defined here
  };
  return ProductImg;
};