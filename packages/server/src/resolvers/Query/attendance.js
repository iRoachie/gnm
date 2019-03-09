// @ts-check

/**
 *
 * @param {*} parent
 * @param {object} args
 * @param {object} context
 * @param {import("@gnm/core/prisma-client").Prisma} context.prisma
 */
const attendance = async (parent, args, context) => {
  return context.prisma.attendances(args);
};

module.exports = attendance;
