const role = require('../getters/role');
const contactSites = require('../getters/contactSites');

const LoggedInUser = {
  role,
  contactSites,
};

module.exports = LoggedInUser;
