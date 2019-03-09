/**
 *
 * @param {*} parent
 * @param {*} args
 * @param {object} context
 * @param {import("@gnm/core/prisma-client").Prisma} context.prisma
 */
const permissions = async (_, args, context) => {
  return context.prisma.permissions();
};

module.exports = permissions;
