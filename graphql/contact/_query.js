const Query = `
 extend type Query {
   contacts: [Contact]
 }
`;

module.exports.queryTypes = () => [Query];

module.exports.queryResolvers = {
    Query: {
        contacts: () => ([{
                title: "Harry Potter and the Sorcerer's stone",
                author: 'J.K. Rowling',
            },
            {
                title: 'Jurassic Park',
                author: 'Michael Crichton',
            },
        ])
    }
};