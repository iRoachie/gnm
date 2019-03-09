// @ts-check
const validator = require('validator');
const bcrypt = require('bcrypt');

const { InvalidEmailError, DuplicateEmailError } = require('../../errors');

/**
 *
 * @param {*} parent
 * @param {object} args
 * @param {import("@gnm/core/prisma-client").UserCreateInput} args.data
 * @param {object} context
 * @param {import("@gnm/core/prisma-client").Prisma} context.prisma
 */
const signup = async (parent, { data }, context) => {
  if (!validator.isEmail(data.email)) {
    throw new InvalidEmailError();
  }

  try {
    const hasedPassword = await bcrypt.hash(data.password, 10);
    const { password, ...rest } = await context.prisma.createUser({
      ...data,
      password: hasedPassword,
    });

    return rest;
  } catch (error) {
    if (error.result.errors.find(a => a.code === 3010)) {
      throw new DuplicateEmailError();
    }

    throw error;
  }
};

module.exports = signup;
