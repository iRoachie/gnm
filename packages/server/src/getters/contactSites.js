// @ts-check

/**
 *
 * @param {*} parent
 * @param {object} args
 * @param {object} context
 * @param {import("@gnm/core/prisma-client").Prisma} context.prisma
 */
const contactSites = async (parent, args, context) => {
  return context.prisma.user({ id: parent.id }).contactSites(args);
};

module.exports = contactSites;
