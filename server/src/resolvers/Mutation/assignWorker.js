// @ts-check
const { validateJWT } = require('../../util');
const { InsufficientPermissionsError } = require('../../errors');

/**
 *
 * @param {*} parent
 * @param {object} args
 * @param {import("@gnm/core/prisma-client").PersonWhereUniqueInput} args.person
 * @param {import("@gnm/core/prisma-client").UserWhereUniqueInput} args.worker
 * @param {object} context
 * @param {import("@gnm/core/prisma-client").Prisma} context.prisma
 * @param {string} [context.token]
 */
const assignWorker = async (parent, { person, worker }, context) => {
  const { permissions } = await validateJWT(context.token);

  if (!permissions.includes('Person:Assign')) {
    throw new InsufficientPermissionsError();
  }

  return context.prisma.updatePerson({
    data: { assignee: { connect: { id: worker.id } } },
    where: { id: person.id },
  });
};

module.exports = assignWorker;
