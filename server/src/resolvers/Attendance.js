// @ts-check

/**
 *
 * @param {*} parent
 * @param {object} args
 * @param {object} context
 * @param {import("@gnm/core/prisma-client").Prisma} context.prisma
 */
const person = async (parent, args, context) => {
  return context.prisma.attendance({ id: parent.id }).person();
};

const Attendance = {
  person,
};

module.exports = Attendance;
