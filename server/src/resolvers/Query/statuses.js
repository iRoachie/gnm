// @ts-check

/**
 *
 * @param {*} parent
 * @param {object} args
 * @param {object} context
 * @param {import("@gnm/core/prisma-client").Prisma} context.prisma
 */
const statuses = async (parent, args, context) => {
  return context.prisma.personStatuses();
};

module.exports = statuses;
