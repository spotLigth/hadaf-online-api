const {
  gql
} = require('apollo-server-express');

const Subcategory = gql `
  type Subcategory {
      id: Int,
      name: String
  }
`;

module.exports.types = () => [Subcategory];

module.exports.typeResolvers = {

};