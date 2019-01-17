const {
    gql
} = require('apollo-server-express');

const subCategoryInput = gql `
    input subCategoryInput {
        id: Int,
        name: String
    }
`;

module.exports = () => [subCategoryInput];