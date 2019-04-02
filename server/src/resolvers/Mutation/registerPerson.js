// @ts-check
const validator = require('validator');
const bcrypt = require('bcrypt');

const { validateJWT } = require('../../util');
const {
  InvalidEmailError,
  InsufficientPermissionsError,
} = require('../../errors');

/**
 *
 * @param {*} parent
 * @param {object} args
 * @param {import("@gnm/core/prisma-client").PersonCreateInput} args.data
 * @param {object} context
 * @param {import("@gnm/core/prisma-client").Prisma} context.prisma
 * @param {string} [context.token]
 */
const registerPerson = async (parent, { data }, context) => {
  const { permissions } = await validateJWT(context.token);

  if (!permissions.includes('Person:Create')) {
    throw new InsufficientPermissionsError();
  }

  if (data.email && !validator.isEmail(data.email)) {
    throw new InvalidEmailError();
  }

  if (data.password) {
    data.password = await bcrypt.hash(data.password, 10);
  }

  return context.prisma.createPerson(data);
};

module.exports = registerPerson;
