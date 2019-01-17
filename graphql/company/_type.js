const {
  gql
} = require('apollo-server-express');

const Company = gql `
  type Company {
      id: Int,
      name: String,
      type: String,
      description: String,
      code: String
  }
`;

module.exports.types = () => [Company];

module.exports.typeResolvers = {

};