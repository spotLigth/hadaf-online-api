const {
  gql
} = require('apollo-server-express');

const User = gql `
  type User {
    id: Int,
    firstName: String,
    lastName: String,
    email: String,
    password: String
  }
`;

module.exports.types = () => [User];

module.exports.typeResolvers = {

};