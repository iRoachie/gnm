const Mutation = require('./Mutation');
const Query = require('./Query');
const ReturnedUser = require('./ReturnedUser');
const LoggedInUser = require('./LoggedInUser');
const ReturnedUserRole = require('./ReturnedUserRole');
const Person = require('./Person');
const Team = require('./Team');
const Note = require('./Note');

const resolvers = {
  Query,
  Person,
  Mutation,
  LoggedInUser,
  ReturnedUser,
  ReturnedUserRole,
  Team,
  Note,
};

module.exports = resolvers;
