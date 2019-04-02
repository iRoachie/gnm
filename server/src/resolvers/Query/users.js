// @ts-check
const { validateJWT } = require('../../util');
const { InsufficientPermissionsError } = require('../../errors');

/**
 *
 * @param {*} parent
 * @param {object} args
 * @param {object} context
 * @param {import("@gnm/core/prisma-client").Prisma} context.prisma
 * @param {string} [context.token]
 */
const users = async (parent, args, context) => {
  const { permissions } = await validateJWT(context.token);

  if (!permissions.includes('User:ListAll')) {
    throw new InsufficientPermissionsError();
  }

  return context.prisma.users(args);
};

module.exports = users;
