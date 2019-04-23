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
const teams = async (parent, args, context) => {
  const { permissions, user } = await validateJWT(context.token);

  if (permissions.includes('Team:ListAll')) {
    return context.prisma.teams(args);
  }

  if (permissions.includes('Team:ListArea')) {
    const sites = (await context.prisma
      .user({ id: user.id })
      .contactSites()).map(a => a.id);

    return context.prisma.teams({
      ...args,
      where: {
        ...args.where,
        contactSite: { id_in: sites },
      },
    });
  }

  throw new InsufficientPermissionsError();
};

module.exports = teams;
