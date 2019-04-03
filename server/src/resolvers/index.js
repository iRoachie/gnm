const Mutation = require('./Mutation');
const Query = require('./Query');
const ReturnedUser = require('./ReturnedUser');
const LoggedInUser = require('./LoggedInUser');
const ReturnedUserRole = require('./ReturnedUserRole');
const Person = require('./Person');

const resolvers = {
  Query,
  Person,
  Mutation,
  LoggedInUser,
  ReturnedUser,
  ReturnedUserRole,
};

module.exports = resolvers;