const db = require('../../models');
const {
    gql
} = require('apollo-server-express');


const Mutation = gql `
    extend type Mutation {
        createCompany(companyInput: companyInput): Company
    }
`


module.exports.mutationTypes = () => [Mutation];

module.exports.mutationResolvers = {
    Mutation: {
        createCompany: (parent, args) => {
            return db.Company.create(args.companyInput)

        }
    }
};