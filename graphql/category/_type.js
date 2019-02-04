const {
  gql
} = require('apollo-server-express');

const Category = gql `
  type Category {
      id: Int,
      name: String,
      description: String
  }
`;

module.exports.types = () => [Category];

module.exports.typeResolvers = {

};