// @ts-check
const { validateJWT } = require('../../util');
const { InsufficientPermissionsError } = require('../../errors');

/**
 *
 * @param {*} parent
 * @param {object} args
 * @param {import("@gnm/core/prisma-client").TeamCreateInput} args.data
 * @param {object} context
 * @param {import("@gnm/core/prisma-client").Prisma} context.prisma
 * @param {string} [context.token]
 */
const createTeam = async (parent, { data }, context) => {
  const { permissions } = await validateJWT(context.token);

  if (!permissions.includes('Team:Create')) {
    throw new InsufficientPermissionsError();
  }

  data.name_search = data.name.toLowerCase();

  return context.prisma.createTeam(data);
};

module.exports = createTeam;
