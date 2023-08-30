const db = require('../../db');
const { NotFoundError } = require('../../shared/errors');

const editUserGuide = async ({ id, ...changes }) => {
  const existing = await db('user_guide').where({ id }).first();

  if (!existing) {
    throw new NotFoundError("Foydalanuvchi uchun qo'llanma topilmadi");
  };

  if (changes.guide_id) {
    const existingGuide = await db('guides')
      .where({ id: changes.guide_id })
      .select()
      .first();

    if (!existingGuide) {
      throw new NotFoundError("Qo'llanma topilmadi");
    };
  };

  if (changes.user_id) {
    const existingUser = await db('users')
      .where({ id: changes.user_id })
      .select()
      .first();

    if (!existingUser) {
      throw new NotFoundError("Foydalanuvchi topilmadi");
    };
  };

  const result = await db('user_guide')
    .where({ id })
    .update({ ...changes })
    .returning(['*']);

  return result[0];
};

module.exports = editUserGuide;