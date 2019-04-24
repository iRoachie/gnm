// @ts-check

/**
 *
 * @param {*} parent
 * @param {object} args
 * @param {object} context
 * @param {import("@gnm/core/prisma-client").Prisma} context.prisma
 */
const user = async (parent, args, context) => {
  return context.prisma.note({ id: parent.id }).user(args);
};

const Note = {
  user,
};

module.exports = Note;
