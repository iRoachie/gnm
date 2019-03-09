/**
 *
 * @param {*} parent
 * @param {*} args
 * @param {object} context
 * @param {import("@gnm/core/prisma-client").Prisma} context.prisma
 */
const userRoles = async (_, args, context) => {
  return context.prisma.userRoles();
};

module.exports = userRoles;
