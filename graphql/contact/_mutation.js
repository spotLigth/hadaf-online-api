const db = require('../../models');
const {
    gql
} = require('apollo-server-express');


const Mutation = gql `
    extend type Mutation {
        createContact(contactInput: contactInput): Contact
    }
`


module.exports.mutationTypes = () => [Mutation];

module.exports.mutationResolvers = {
    Mutation: {
        createContact: (parent, args) => {
            return db.Contact.create(args.contactInput)

        }
    }
};