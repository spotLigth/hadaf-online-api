const db = require('../../models');
const {
    gql
} = require('apollo-server-express');

const Query = gql `
    extend type Query {
        companies: [Company]
        company(id: Int): Company
    }
`;

module.exports.queryTypes = () => [Query];

module.exports.queryResolvers = {
    Query: {
        companies: () => {
            return db.Company.findAll()
        },

        company: (parent, args) => {
            return db.Company.findOne({
                where: {
                    id: args.id
                }
            })
        }
    }
};