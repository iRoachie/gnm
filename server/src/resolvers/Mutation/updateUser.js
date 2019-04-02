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
 * Updates info for a user
 *
 * @param {*} parent
 * @param {object} args
 * @param {import("@gnm/core/prisma-client").UserUpdateInput} args.data
 * @param {import("@gnm/core/prisma-client").UserWhereUniqueInput} args.where
 * @param {object} context
 * @param {import("@gnm/core/prisma-client").Prisma} context.prisma
 * @param {string} [context.token]
 */
const updateUser = async (parent, { data, where }, context) => {
  const { permissions } = await validateJWT(context.token);

  if (!permissions.includes('User:Update')) {
    throw new InsufficientPermissionsError();
  }

  let hashedPassword;

  if (data.email && !validator.isEmail(data.email)) {
    throw new InvalidEmailError();
  }

  if (data.password) {
    hashedPassword = await bcrypt.hash(data.password, 10);
    data.password = hashedPassword;
  }

  return context.prisma.updateUser({ data, where });
};

module.exports = updateUser;
