const {
    gql
} = require('apollo-server-express');

const companyInput = gql `
    input companyInput {
        id: Int,
        name: String,
        type: String,
        description: String,
        code: String
    }
`;

module.exports = () => [companyInput];