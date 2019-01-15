const Contact = `
 type Contact {
   title: String!
   author: String!
 }
`;

module.exports.types = () => [Contact];

module.exports.typeResolvers = {

};