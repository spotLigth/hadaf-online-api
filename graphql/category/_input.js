const {
    gql
} = require('apollo-server-express');

const categoryInput = gql `
    input categoryInput {
        id: Int,
        name: String,
        description: String,
    }
`;

module.exports = () => [categoryInput];