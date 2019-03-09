// @ts-check

/**
 *
 * @param {*} parent
 * @param {object} args
 * @param {object} context
 * @param {import("@gnm/core/prisma-client").Prisma} context.prisma
 */
function role(parent, args, context) {
  return context.prisma.user({ id: parent.id }).role();
}

module.exports = role;
