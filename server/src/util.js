// @ts-check
const jwt = require('jsonwebtoken');

const { prisma } = require('@gnm/core/prisma-client');
const { InvalidTokenError, NoAuthError } = require('./errors');

/**
 *
 * @param {string} [token] - jwt
 */
async function validateJWT(token) {
  if (!token) {
    throw new NoAuthError();
  }

  try {
    /**
     * @type {import("@gnm/core/prisma-client/index").User}
     */
    const data = await jwt.verify(token, process.env.APP_SECRET);
    const permissions = await prisma
      .user({ id: data.id })
      .role()
      .permissions();

    if (!permissions) {
      throw new InvalidTokenError();
    }

    return { permissions: permissions.map(a => a.title), user: data };
  } catch (err) {
    console.log(err);
    throw new InvalidTokenError();
  }
}

module.exports = {
  validateJWT,
};
