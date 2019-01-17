const db = require('../../models');
const {
    gql
} = require('apollo-server-express');

const Query = gql `
    extend type Query {
        users: [User]
        user(id: Int): User
    }
`;

module.exports.queryTypes = () => [Query];

module.exports.queryResolvers = {
    Query: {
        users: () => {
            return db.User.findAll()
        },

        user: (parent, args) => {
            return db.User.findOne({
                where: {
                    id: args.id
                }
            })
        }
    }
};