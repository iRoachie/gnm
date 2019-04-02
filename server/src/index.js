require('dotenv').config();

const { GraphQLServer } = require('graphql-yoga');
const { formatError } = require('apollo-errors');

const { prisma } = require('@gnm/core/prisma-client');
const resolvers = require('./resolvers');

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  resolverValidationOptions: {
    requireResolversForResolveType: false,
  },
  context: req => ({
    token: req.request.headers.authorization,
    prisma,
  }),
});

server.start({ formatError }, () =>
  console.log('Server is running on http://localhost:4000')
);
