// @ts-check

/**
 *
 * @param {*} parent
 * @param {object} args
 * @param {object} context
 * @param {import("@gnm/core/prisma-client").Prisma} context.prisma
 */
function team(parent, args, context) {
  return context.prisma.person({ id: parent.id }).team();
}

module.exports = team;
