const db = require('../../models');
const {
    gql
} = require('apollo-server-express');


const Mutation = gql `
    extend type Mutation {
        createSubCategory(subCategoryInput: subCategoryInput): Subcategory
    }
`


module.exports.mutationTypes = () => [Mutation];

module.exports.mutationResolvers = {
    Mutation: {
        createSubCategory: (parent, args) => {
            return db.Subcategory.create(args.subCategoryInput)

        }
    }
};