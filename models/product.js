'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    unit: DataTypes.STRING,
    priority: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {});
  Product.associate = function(models) {
    Product.belongsTo(models.Subcategory)
    Product.belongsTo(models.Company)
  };
  return Product;
};