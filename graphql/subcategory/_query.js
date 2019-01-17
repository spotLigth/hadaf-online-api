const db = require('../../models');
const {
    gql
} = require('apollo-server-express');

const Query = gql `
    extend type Query {
        subcategories: [Subcategory]
        subcategory(id: Int): Subcategory
    }
`;

module.exports.queryTypes = () => [Query];

module.exports.queryResolvers = {
    Query: {
        subcategories: () => {
            return db.Subcategory.findAll()
        },

        subcategory: (parent, args) => {
            return db.Subcategory.findOne({
                where: {
                    id: args.id
                }
            })
        }
    }
};