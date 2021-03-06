const users = require('./users');
const user = require('./user');
const userRoles = require('./userRoles');
const contactSites = require('./contactSites');
const permissions = require('./permissions');
const statuses = require('./statuses');
const attendance = require('./attendance');
const persons = require('./persons');
const person = require('./person');
const teams = require('./teams');
const team = require('./team');

const Query = {
  users,
  user,
  userRoles,
  contactSites,
  permissions,
  statuses,
  attendance,
  persons,
  person,
  teams,
  team,
};

module.exports = Query;
