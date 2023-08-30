const db = require('../../db');
const { NotFoundError } = require('../../shared/errors');

const addUserGuide = async (data) => {
  const existingGuide = await db('guides')
    .where({ id: data.guide_id })
    .select()
    .first();

  if (!existingGuide) {
    throw new NotFoundError("Qo'llanma topilmadi");
  };

  const existingUser = await db('users')
    .where({ id: data.user_id })
    .select()
    .first();

  if (!existingUser) {
    throw new NotFoundError("Foydalanuvchi topilmadi");
  };

  const result = await db('user_guide')
    .insert(data)
    .returning('*');

  return result[0];
};

module.exports = addUserGuide;