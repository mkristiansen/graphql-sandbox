const { EXPRESS_GRAPHQL } = require('@forrestjs/service-express-graphql')
const { GraphQLList, GraphQLString } = require('graphql')

const welcomeHandler = (_, args, { req }) => [
    `Welcome, ${args.name}!`,
    req.protocol + '://' + req.get('host') + req.originalUrl,
]

const welcomeQuery = ({ queries }) =>
    queries.welcome = {
        description: 'Welcome the user',
        args: {
            name: {
                type: GraphQLString,
                defaultValue: 'user',
            },
        },
        type: new GraphQLList(GraphQLString),
        resolve: welcomeHandler,
    }

module.exports = [ EXPRESS_GRAPHQL, welcomeQuery ]
