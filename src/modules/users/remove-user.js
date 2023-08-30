const db = require('../../db');
const { NotFoundError, ForbiddenError } = require('../../shared/errors');

const removeUser = async ({ id }, user) => {
  if (Number(id) === user.id) {
    throw new ForbiddenError("O'zingizni o'chira olmaysiz");
  };

  const existing = await db('users').where({ id }).first();

  if (!existing) {
    throw new NotFoundError('Foydalanuvchi topilmadi');
  };

  const result = await db('users')
    .where({ id })
    .delete()
    .returning('*');

  return result[0];
};

module.exports = removeUser;