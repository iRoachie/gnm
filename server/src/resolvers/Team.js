/**
 *
 * @param {*} parent
 * @param {object} args
 * @param {object} context
 * @param {import("@gnm/core/prisma-client").Prisma} context.prisma
 */
const contactSite = async (parent, args, context) => {
  return context.prisma.team({ id: parent.id }).contactSite();
};

const Team = {
  contactSite,
};

module.exports = Team;
