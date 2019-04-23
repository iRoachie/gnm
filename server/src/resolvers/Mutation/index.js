// @ts-check
const registerUser = require('./registerUser');
const login = require('./login');
const updateUser = require('./updateUser');
const registerPerson = require('./registerPerson');
const assignWorker = require('./assignWorker');
const updatePerson = require('./updatePerson');
const createTeam = require('./createTeam');
const updateTeam = require('./updateTeam');

const Mutation = {
  registerUser,
  login,
  updateUser,
  registerPerson,
  assignWorker,
  updatePerson,
  createTeam,
  updateTeam,
};

module.exports = Mutation;
