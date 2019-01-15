'use strict';
module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define('Contact', {
    address1: DataTypes.STRING,
    address2: DataTypes.STRING,
    email1: DataTypes.STRING,
    email2: DataTypes.STRING,
    phone1: DataTypes.STRING,
    phone2: DataTypes.STRING,
    fax: DataTypes.STRING,
    country: DataTypes.STRING,
    city: DataTypes.STRING,
    zipCode: DataTypes.STRING,
    mailBox: DataTypes.STRING
  }, {});
  Contact.associate = function(models) {
    Contact.hasOne(models.Company);
  };
  return Contact;
};