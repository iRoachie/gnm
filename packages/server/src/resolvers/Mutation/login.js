// @ts-check
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { InvalidEmailError, InvalidCredentialsError } = require('../../errors');

/**
 *
 * @param {*} parent
 * @param {object} args
 * @param {string} args.email
 * @param {string} args.password
 * @param {object} context
 * @param {import("@gnm/core/prisma-client").Prisma} context.prisma
 */
const login = async (parent, { email, password }, context) => {
  if (!validator.isEmail(email)) {
    throw new InvalidEmailError();
  }

  const [user] = await context.prisma.users({ where: { email } });

  // No user found
  if (!user) {
    throw new InvalidCredentialsError();
  }

  const { password: hashedPassword } = user;

  // Wrong password
  if (!(await bcrypt.compare(password, hashedPassword))) {
    throw new InvalidCredentialsError();
  }

  const token = jwt.sign(user, process.env.APP_SECRET);
  user['jwt'] = token;

  return user;
};

module.exports = login;
