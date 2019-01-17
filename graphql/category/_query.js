const db = require('../../models');
const {
    gql
} = require('apollo-server-express');

const Query = gql `
    extend type Query {
        categories: [Category]
        category(id: Int): Category
    }
`;

module.exports.queryTypes = () => [Query];

module.exports.queryResolvers = {
    Query: {
        categories: () => {
            return db.Category.findAll()
        },

        category: (parent, args) => {
            return db.Category.findOne({
                where: {
                    id: args.id
                }
            })
        }
    }
};