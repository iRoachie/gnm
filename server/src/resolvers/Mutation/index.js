// @ts-check
const registerUser = require('./registerUser');
const login = require('./login');
const updateUser = require('./updateUser');
const registerPerson = require('./registerPerson');
const assignWorker = require('./assignWorker');
const updatePerson = require('./updatePerson');

const Mutation = {
  registerUser,
  login,
  updateUser,
  registerPerson,
  assignWorker,
  updatePerson,
};

module.exports = Mutation;
