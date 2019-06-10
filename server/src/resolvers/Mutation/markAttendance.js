// @ts-check
const { validateJWT } = require('../../util');
const { InsufficientPermissionsError } = require('../../errors');

/**
 *
 * @param {*} parent
 * @param {object} args
 * @param {import("@gnm/core/prisma-client").AttendanceCreateInput} args.data
 * @param {object} context
 * @param {import("@gnm/core/prisma-client").Prisma} context.prisma
 * @param {string} [context.token]
 */
const markAttendance = async (parent, { data }, context) => {
  const { permissions } = await validateJWT(context.token);

  if (!permissions.includes('Attendance:Mark')) {
    throw new InsufficientPermissionsError();
  }

  return context.prisma.createAttendance(data);
};

module.exports = markAttendance;
