const db = require('../../db');
const { NotFoundError } = require('../../shared/errors');

const removeUserGuide = async ({ id }) => {
  const existing = await db('user_guide').where({ id }).first();

  if (!existing) {
    throw new NotFoundError("Foydalanuvchi uchun qo'llanma topilmadi");
  };

  const result = await db('user_guide')
    .where({ id })
    .delete()
    .returning('*');

  return result[0];
};

module.exports = removeUserGuide;