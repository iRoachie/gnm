// @ts-check
const { validateJWT } = require('../../util');
const { InsufficientPermissionsError } = require('../../errors');

/**
 *
 * @param {*} parent
 * @param {object} args
 * @param {import("@gnm/core/prisma-client").TeamWhereUniqueInput} args.where
 * @param {object} context
 * @param {import("@gnm/core/prisma-client").Prisma} context.prisma
 * @param {string} [context.token]
 */
const team = async (parent, args, context) => {
  const { where } = args;

  const { permissions, user } = await validateJWT(context.token);

  if (permissions.includes('Team:View')) {
    return context.prisma.team(where);
  }

  if (permissions.includes('Team:ViewArea')) {
    // Get contact site for user
    const userSites = (await context.prisma
      .user({ id: user.id })
      .contactSites()).map(a => a.id);

    // Get contact site for team
    const teamSite = await context.prisma.team(where).contactSite();

    if (!teamSite) {
      return null;
    }

    // Check if user can view this person
    if (!userSites.includes(teamSite.id)) {
      throw new InsufficientPermissionsError();
    }

    return context.prisma.team(where);
  }

  throw new InsufficientPermissionsError();
};

module.exports = team;
