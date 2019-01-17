const {
    types,
    typeResolvers
} = require('./_type');
const {
    queryTypes,
    queryResolvers
} = require('./_query');
const inputTypes = require('./_input');
const {
    mutationTypes,
    mutationResolvers
} = require('./_mutation');

module.exports = {
    types: () => [types, queryTypes, inputTypes, mutationTypes],
    resolvers: Object.assign(queryResolvers, mutationResolvers, typeResolvers),
};