const { compare } = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UnauthorizedError } = require('../../shared/errors');
const config = require('../../shared/config');
const db = require('../../db');

const login = async ({ username, password }) => {
  const existing = await db('users')
    .where({ username })
    .select('id', 'password', 'role')
    .first();

  if (!existing) {
    throw new UnauthorizedError('Username yoki password xato kiritilgan');
  };

  const passwordCompare = await compare(password, existing.password);

  if (!passwordCompare) {
    throw new UnauthorizedError('Username yoki password xato kiritilgan');
  };

  const token = jwt.sign(
    {
      user: {
        id: existing.id,
        role: existing.role
      }
    },
    config.jwt.secret,
    { expiresIn: '1d' },
  );

  return { token };
};

module.exports = login;