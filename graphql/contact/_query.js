const db = require('../../models');
const {
    gql
} = require('apollo-server-express');

const Query = gql `
    extend type Query {
        contacts: [Contact]
        contact(id: Int): Contact
    }
`;

module.exports.queryTypes = () => [Query];

module.exports.queryResolvers = {
    Query: {
        contacts: () => {
            return db.Contact.findAll()
        },

        contact: (parent, args) => {
            return db.Contact.findOne({
                where: {
                    id: args.id
                }
            })
        }
    }
};