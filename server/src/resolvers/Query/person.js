// @ts-check
const { validateJWT } = require('../../util');
const { InsufficientPermissionsError } = require('../../errors');

/**
 *
 * @param {*} parent
 * @param {object} args
 * @param {import("@gnm/core/prisma-client").PersonWhereUniqueInput} args.where
 * @param {object} context
 * @param {import("@gnm/core/prisma-client").Prisma} context.prisma
 * @param {string} [context.token]
 */
const person = async (parent, args, context) => {
  const { where } = args;

  const { permissions, user } = await validateJWT(context.token);

  if (permissions.includes('Person:View')) {
    return context.prisma.person(where);
  }

  if (permissions.includes('Person:ViewArea')) {
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

    return context.prisma.person(where);
  }

  if (permissions.includes('Person:ViewAssigned')) {
    const assignee = await context.prisma.person(where).assignee();

    if (!assignee || assignee.id !== user.id) {
      throw new InsufficientPermissionsError();
    }

    return context.prisma.person(where);
  }

  throw new InsufficientPermissionsError();
};

module.exports = person;
