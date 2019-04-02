// @ts-check

/**
 *
 * @param {*} parent
 * @param {object} args
 * @param {object} context
 * @param {import("@gnm/core/prisma-client").Prisma} context.prisma
 */
const contactSite = async (parent, args, context) => {
  return context.prisma.person({ id: parent.id }).contactSite();
};

module.exports = contactSite;
