const contactSite = require('../getters/contactSite');
const status = require('../getters/status');
const team = require('../getters/team');
const notes = require('../getters/notes');

const Person = {
  contactSite,
  status,
  team,
  notes,
};

module.exports = Person;
