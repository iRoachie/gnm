const { createError } = require('apollo-errors');

module.exports.InvalidEmailError = createError('InvalidEmail', {
  message: 'Invalid Email',
});

module.exports.DuplicateEmailError = createError('DuplicateEmail', {
  message: 'User with this email address already exist.',
});

module.exports.InvalidCredentialsError = createError('InvalidCredentials', {
  message: 'Email address or password incorrect.',
});

module.exports.NoAuthError = createError('NoAuth', {
  message: 'Resource requires authorization header.',
});

module.exports.InvalidTokenError = createError('InvalidToken', {
  message: 'Invalid JWT provided.',
});

module.exports.InsufficientPermissionsError = createError(
  'InsufficientPermissions',
  {
    message: 'You do not have permissions to access this resource.',
  }
);
