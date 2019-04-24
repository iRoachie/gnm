// @ts-check

/**
 *
 * @param {*} parent
 * @param {object} args
 * @param {object} context
 * @param {import("@gnm/core/prisma-client").Prisma} context.prisma
 */
const notes = async (parent, args, context) => {
  return context.prisma.person({ id: parent.id }).notes(args);
};

module.exports = notes;
