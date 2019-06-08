// @ts-check

/**
 *
 * @param {*} parent
 * @param {object} args
 * @param {object} context
 * @param {import("@gnm/core/prisma-client").Prisma} context.prisma
 */
const attendance = async (parent, args, context) => {
  const attendances = await context.prisma.attendances(args);

  return {
    count: attendances.length,
    data: attendances,
  };
};

module.exports = attendance;
