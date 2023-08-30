const db = require('../../db');
const { NotFoundError, ForbiddenError } = require('../../shared/errors');

const showUserGuide = async ({ id, user }) => {
  const userGuide = await db('user_guide')
    .where({ id })
    .select()
    .first();

  if (!userGuide) {
    throw new NotFoundError("Foydalanuvchi uchun qo'llanma topilmadi");
  };

  if (userGuide.user_id !== user.id) {
    throw new ForbiddenError("Boshqalarni qo'llanmasini ko'rish mumkin emas");
  };

  return userGuide;
};

module.exports = showUserGuide;