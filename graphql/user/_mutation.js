const db = require('../../models');
const {
    gql
} = require('apollo-server-express');


const Mutation = gql `
    extend type Mutation {
        createUser(userInput: userInput): User
    }
`


module.exports.mutationTypes = () => [Mutation];

module.exports.mutationResolvers = {
    Mutation: {
        createUser: (parent, args) => {
            return db.User.create(args.userInput)

        }
    }
};