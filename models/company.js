'use strict';
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    description: DataTypes.STRING,
    code: DataTypes.STRING
  }, {});
  Company.associate = function(models) {
    Company.belongsTo(models.Contact)
  };
  return Company;
};