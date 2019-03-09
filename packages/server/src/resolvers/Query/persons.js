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
const persons = async (parent, args, context) => {
  const { permissions, user } = await validateJWT(context.token);

  if (permissions.includes('Person:ListAll')) {
    return context.prisma.persons(args);
  }

  if (permissions.includes('Person:ListArea')) {
    const sites = (await context.prisma
      .user({
        id: user.id,
      })
      .contactSites()).map(a => a.id);

    return context.prisma.persons({
      ...args,
      where: {
        ...args.where,
        contactSite: { id_in: sites },
      },
    });
  }

  if (permissions.includes('Person:ListAssigned')) {
    return context.prisma.persons({
      ...args,
      where: {
        ...args.where,
        assignee: { id: user.id },
      },
    });
  }

  throw new InsufficientPermissionsError();
};

module.exports = persons;
