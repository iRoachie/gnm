// @ts-check

/**
 *
 * @param {*} parent
 * @param {object} args
 * @param {object} context
 * @param {import("../../generated/prisma-client").Prisma} context.prisma
 */
const user = async (parent, args, context) => {
  return context.prisma.user({ ...args.where });
};

module.exports = user;
