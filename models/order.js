'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    email: DataTypes.STRING,
    description: DataTypes.STRING,
    quantity: DataTypes.INTEGER
  }, {});
  Order.associate = function (models) {
    Order.belongsTo(models.Product)
    Order.belongsTo(models.User)
  };
  return Order;
};