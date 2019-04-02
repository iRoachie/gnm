// @ts-check

const ReturnedUserRole = {
  /**
   *
   * @param {*} parent
   * @param {object} args
   * @param {object} context
   * @param {import("@gnm/core/prisma-client/index").Prisma} context.prisma
   */
  async permissions(parent, args, context) {
    const permissions = await context.prisma
      .userRole({ title: parent.title })
      .permissions();
    return permissions.map(a => a.title);
  },
};

module.exports = ReturnedUserRole;
