const {
    gql
} = require('apollo-server-express');

const userInput = gql `
    input userInput {
        id: Int,
        firstName: String,
        lastName: String,
        email: String,
        password: String
    }
`;

module.exports = () => [userInput];