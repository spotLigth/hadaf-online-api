const {
    gql
} = require('apollo-server-express');

const contactInput = gql `
    input contactInput {
        id: Int,
        address1: String,
        address2: String,
        email1: String,
        email2: String,
        phone1: String,
        phone2: String,
        fax: String,
        country: String,
        city: String,
        zipCode: String,
        mailBox: String
    }
`;

module.exports = () => [contactInput];