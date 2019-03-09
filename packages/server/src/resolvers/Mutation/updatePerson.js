// @ts-check
const { validateJWT } = require('../../util');
const { InsufficientPermissionsError } = require('../../errors');

/**
 *
 * @param {*} parent
 * @param {object} args
 * @param {import("@gnm/core/prisma-client").PersonUpdateInput} args.data
 * @param {import("@gnm/core/prisma-client").PersonWhereUniqueInput} args.where
 * @param {object} context
 * @param {import("@gnm/core/prisma-client").Prisma} context.prisma
 * @param {string} [context.token]
 */
const updatePerson = async (parent, args, context) => {
  const { where, data } = args;

  const { permissions, user } = await validateJWT(context.token);

  if (permissions.includes('Person:Update')) {
    return context.prisma.updatePerson(args);
  }

  if (permissions.includes('Person:UpdateArea')) {
    // Get contact site for user
    const userSites = (await context.prisma
      .user({ id: user.id })
      .contactSites()).map(a => a.id);

    // Get contact site for person
    const personSite = await context.prisma.person(where).contactSite();

    if (!personSite) {
      return null;
    }

    // Check if user can view this person
    if (!userSites.includes(personSite.id)) {
      throw new InsufficientPermissionsError();
    }

    return context.prisma.updatePerson(args);
  }

  if (permissions.includes('Person:UpdateAssigned')) {
    const assignee = await context.prisma.person(where).assignee();

    if (!assignee || assignee.id !== user.id) {
      throw new InsufficientPermissionsError();
    }

    return context.prisma.updatePerson(args);
  }

  throw new InsufficientPermissionsError();
};

module.exports = updatePerson;
