const db = require('../../models');
const {
    gql
} = require('apollo-server-express');


const Mutation = gql `
    extend type Mutation {
        createCategory(categoryInput: categoryInput): Category
    }
`


module.exports.mutationTypes = () => [Mutation];

module.exports.mutationResolvers = {
    Mutation: {
        createCategory: (parent, args) => {
            return db.Category.create(args.categoryInput)

        }
    }
};