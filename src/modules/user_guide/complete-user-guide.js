const db = require('../../db');
const { NotFoundError, ForbiddenError } = require('../../shared/errors');

const completeUserGuide = async ({ id, user, ...changes }) => {
  const existing = await db('user_guide').where({ id }).first();

  if (!existing) {
    throw new NotFoundError("Foydalanuvchi uchun qo'llanma topilmadi");
  };

  if (existing.user_id !== user.id) {
    throw new ForbiddenError("Birovni o'rniga tasdiqlash mumkin emas");
  };

  const result = await db('user_guide')
    .where({ id })
    .update({ ...changes })
    .returning(['*']);

  return result[0];
};

module.exports = completeUserGuide;