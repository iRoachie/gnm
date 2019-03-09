const signup = require('./signup');
const login = require('./login');
const updateUser = require('./updateUser');
const registerPerson = require('./registerPerson');
const assignWorker = require('./assignWorker');
const updatePerson = require('./updatePerson');

const Mutation = {
  signup,
  login,
  updateUser,
  registerPerson,
  assignWorker,
  updatePerson,
};

module.exports = Mutation;
